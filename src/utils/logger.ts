import fs from 'fs';
import * as stream from 'stream';
import winston, { format, transports } from 'winston';
import 'winston-daily-rotate-file';

import config from '../config/config';

const { level, path } = config.logging;
const dateFormat = () => new Date(Date.now()).toISOString();

if (!fs.existsSync(path)) {
  fs.mkdirSync(path);
}

const logger = winston.createLogger({
  transports: [
    new transports.DailyRotateFile({
      format: format.combine(format.timestamp(), format.json()),
      level: 'debug',
      dirname: path,
      filename: '%DATE%-debug.log'
    }),
    new transports.DailyRotateFile({
      format: format.printf((info) => {
        const message = `${dateFormat()} | ${info.level.toUpperCase()} | ${info.message} | `;

        return message;
      }),
      level: 'error',
      dirname: path,
      filename: '%DATE%-error.log'
    }),
    new transports.DailyRotateFile({
      format: format.printf((info) => {
        const message = `${dateFormat()} | ${info.level.toUpperCase()} | ${info.message} | `;
        return message;
      }),
      level: 'info',
      dirname: path,
      filename: '%DATE%-info.log'
    }),
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
      level: `${level}`
    })
  ]
});

/**
 * A writable stream for winston logging.
 */
export const logStream = new stream.Writable({
  write(message) {
    logger.info(message.toString());
  }
});

export default logger;
