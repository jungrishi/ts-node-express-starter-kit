const path = require('path');
require("dotenv").config();

const BASE_PATH = path.join(__dirname, 'src');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    }
  }
};
