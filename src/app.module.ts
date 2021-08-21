import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TaskController } from './task/task.controller';
// import { TaskController } from './task.controller';
import { TaskService } from './task/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm/typeorm.config';
import { TaskRepository } from './task/task.respository';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),TypeOrmModule.forFeature([TaskRepository]),TaskModule
  ],
  controllers: [TaskController],
  providers: [TaskService]
  
})
export class AppModule {}
