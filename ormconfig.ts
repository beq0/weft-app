import { config } from 'dotenv';
import { ConnectionOptions } from 'typeorm';

config();

const ORMConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/database/migrations/*.js'],
  synchronize: false,
  logging: false
};

export default ORMConfig;
