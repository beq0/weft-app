import { config } from 'dotenv';
import { ConnectionOptions, DataSource } from 'typeorm';

config();

const ORMConfig: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/src/database/migrations/*.js'],
  logging: false,
};

const dataSource = new DataSource(ORMConfig)

export default dataSource;
export {
  ORMConfig,
};
