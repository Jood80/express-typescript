import { NextFunction, Request, Response } from 'express';

import logging from '../config/logging';
import { connect, Query } from '../config/mysql';

const NAMESPACE = 'Books';

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting all books');

    let query = 'SELECT * FROM books';

    connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    return res.status(200).json({
                        results
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


export {getAllBooks}