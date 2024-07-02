import 'dotenv/config';
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Author1719825130234 } from "./migrations/1719825130234-author"
import { Users1719830348263 } from './migrations/1719830348263-users';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [`${__dirname}/models/**/*{.ts,.js}`],
    //entities: [],
    migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
    //migrations:[Author1719825130234,Users1719830348263],
    synchronize: false,
    logging: false,
})