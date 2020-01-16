import Knex from 'knex';
import config from '../config/config';

export default Knex(config.database);
