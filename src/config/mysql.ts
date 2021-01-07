import mysql from 'mysql';
import config from './config';

const params = {
    user: config.mysql.user,
    password: config.mysql.database,
    host: config.mysql.host,
    database: config.mysql.database
};

const Connect = async () =>
    new Promise<mysql.Connection>((resolve, reject) => {
        const connection = mysql.createConnection(params);
        connection.connect((err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(connection);
        });
    });

const Query = async (connection: mysql.Connection, query: string) =>
    new Promise((resolve, reject) => {
        connection.query(query, connection, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });

export { Connect, Query };
