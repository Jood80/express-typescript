import { NextFunction, Request, Response } from 'express';

import logging from '../utils/logging';
import { connect, Query } from '../database/config/mysql';
import { getAllBooksQuery } from '../database/queries/getBooks';

const NAMESPACE = 'Books';

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, 'Getting all books');
  try {
    let results = await getAllBooksQuery();
    console.log({ results });
    return res.status(200).json(results);
  } catch (err) {
    console.error({ err });
  }

  next();
};

export { getAllBooks };
