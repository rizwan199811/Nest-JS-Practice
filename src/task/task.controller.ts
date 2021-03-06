import { Body, Controller, Get, Post,Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { title } from 'process';
import { TaskStatus } from './task.enum';
import { CreateTaskDto } from '../task/dto/create-task.dto';
import { TaskService } from './task.service';
import { FilterTaskDto } from './dto/filter-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validatipn.pipe';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {

    constructor(private taskService:TaskService){
   
    }
    // @Get()   
    // getTask(@Query(ValidationPipe) filterdto:FilterTaskDto):Task[]{
    //   console.log("filterdto",filterdto);
    //   return this.taskService.getAllTasks()
    // }
    
    // @Get()
 
    // getAllTask():Task[]{
    //   return this.taskService.getAllTasks()
    // }

  

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto:CreateTaskDto):Promise<Task>{
    let {title,description}=createTaskDto
     console.log('title',title)
     console.log('description',description)
     return this.taskService.createTask(createTaskDto)
    }


    @Get('/:id') 
    getTaskById(@Param('id',ParseIntPipe) id:number):Promise<Task>{
    return this.taskService.getTaskById(id)
    }

    @Delete('/:id') 
    deleteTaskById(@Param('id',ParseIntPipe) id:number):Promise<void>{
    return this.taskService.deleteTaskById(id)
    }

  //  @Patch('/:id')
  //    updateTaskById(@Param('id') id:string,@Body('status',new TaskStatusValidationPipe) status:TaskStatus):Task{
  //     // const task= this.getTaskById(id);
  //     // task.status=status;
  //     return this.taskService.updateTaskById(id,status)
  //     // return task
  //   }
}
