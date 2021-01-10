import { readFileSync } from 'fs';
import { join } from 'path';
import { MysqlError } from 'mysql';


import db_connection from './dbConnection.js';

const mysql = readFileSync(join(__dirname, 'dbBuild.sql')).toString();

db_connection
  .query(mysql)
  .then(() => console.info('DB has been successfully created'))
  .catch((MysqlError: { stack: string, sqlMessage: string }) => console.error('Failed to build your DB :(', MysqlError.stack, MysqlError.sqlMessage));
