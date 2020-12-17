import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const DatabaseConfig: TypeOrmModuleOptions = {
    "type": 'postgres',
    "host": 'localhost',
    "port": 5432,
    "username": 'aleksandar77np',
    "password": "",
    "database": 'aotDB',
    "entities": ["dist/**/*.entity.js"],
    "synchronize": true
}