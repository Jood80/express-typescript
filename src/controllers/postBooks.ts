import { NextFunction, Request, Response } from 'express';

import logging from '../utils/logging';
import { connect, Query } from '../database/config/mysql';

const NAMESPACE = 'Books';

const postBook = (req: Request, res: Response, next: NextFunction) => {
 logging.info(NAMESPACE, 'Creating Book.');

 let { title, author } = req.body;

 const query = `INSERT INTO books (title, author) VALUES ("${title}", "${author}")`;

 connect()
  .then((connection) => {
   Query(connection, query)
    .then((result) => {
     return res.status(200).json({
      result
     });
    })
    .catch((error) => {
     logging.error(NAMESPACE, error.message, error);
     return res.status(500).json({
      message: error.message,
      error
     });
    })
    .finally(() => {
     connection.end();
    });
  })
  .catch((error) => {
   logging.error(NAMESPACE, error.message, error);

   return res.status(500).json({
    message: error.message,
    error
   });
  });
};

export { postBook };
