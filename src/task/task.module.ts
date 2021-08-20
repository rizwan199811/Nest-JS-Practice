import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.respository';


@Module({
 imports:[TypeOrmModule.forFeature([TaskRepository])]
})
export class TaskModule {}
