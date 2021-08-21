import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig:TypeOrmModuleOptions={
    type:'postgres',
    host:'localhost',
    port:5432,
    // username:'postgres1',
    username:'postgres',
    // password:'postgres',
    password:'rizwan@123',
    database:'taskmanagement',
    entities:[__dirname+'/../**/*.entity.ts'],
    synchronize:true,
    autoLoadEntities: true,
}