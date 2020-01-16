import * as dotenv from 'dotenv';
import * as pkg from '../../package.json';

dotenv.config();

export default {
  app: {
    name: (pkg as any).name,
    version: (pkg as any).version,
    description: (pkg as any).description,
    host: process.env.HOST,
    port: process.env.PORT
  },
  logging: {
    path: process.env.LOG_DIR || 'logs',
    level: process.env.LOG_LEVEL || 'info'
  },
  database: {
    client: 'pg',
    connection: {
      charset: 'utf8',
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST || '127.0.0.1'
    }
  }
};
