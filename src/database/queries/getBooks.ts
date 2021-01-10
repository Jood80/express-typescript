import { QueryOptions } from 'mysql';
const { promisify } = require('util');

import db_connection from '../config/dbConnection';

type MyBooksType = {
  title: string;
  author: string;
};

const sql: string | QueryOptions = 'SELECT * FROM books';


let getAllBooksQuery = async () => {
  
  return await db_connection.query(sql, (error: Error, results: { [key: string]: MyBooksType }, _fields) => {
    if (error) throw new Error();

    results = JSON.parse(JSON.stringify(results));  
    console.log(results);
    
    return results;
  })
};

export { getAllBooksQuery };
