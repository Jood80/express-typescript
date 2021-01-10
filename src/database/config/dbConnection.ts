import { createPool, PoolConfig, MysqlError } from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

// ConnectionConfig extends ConnectionOptions, the later doesn't have host and ssl options.
const connectionConfig: PoolConfig = {
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST || 'localhost',
  ssl: { rejectUnauthorized: false }
};

if (!connectionConfig) throw new Error('Sumimasen! we could not connect you into your DB :/');

export default createPool(connectionConfig);
