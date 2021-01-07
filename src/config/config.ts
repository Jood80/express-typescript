import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 4000;

const SERVER = {
    hostName: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'books';
const MYSQL_USERNAME = process.env.MYSQL_USERNAME || 'Jood';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '123';

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USERNAME,
    password: MYSQL_PASSWORD
};

const config = {
    server: SERVER,
    mysql: MYSQL
};

export default config;
