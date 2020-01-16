import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import config from './config/config';
import logger, { logStream } from './utils/logger';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev', { stream: logStream }));
app.use(bodyParser.json());

// API Routes
// app.use('/', routes)

logger.info('Application Environment: ' + app.get('env'));
logger.debug('Debug logs are enabled');

app.listen(config.app.port, () => {
  logger.info(`Listening at Port ${config.app.port}`);
});

export default app;
