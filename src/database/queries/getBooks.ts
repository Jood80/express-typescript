import { QueryOptions } from 'mysql';
const { promisify } = require('util');

import db_connection from '../config/dbConnection';

const sql: string | QueryOptions = 'SELECT * FROM books';

let getAllBooksQuery = async () => {
  const promiseQuery = promisify(db_connection.query).bind(db_connection);
  let res = await promiseQuery(sql);
  return res;
};

export { getAllBooksQuery };
