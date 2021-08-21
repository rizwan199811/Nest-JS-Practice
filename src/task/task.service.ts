import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus} from './task.enum';
import { CreateTaskDto} from '../task/dto/create-task.dto';
import * as uuid from "uuidv1";
import { TaskRepository } from './task.respository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
@Injectable()
export class TaskService {
    constructor(
    @InjectRepository(TaskRepository)
    private repository:TaskRepository,
    ){

    }
    
    // private task:Task[]=[];
    // getAllTasks():Task[]{
    //     return this.task;
    // }
     createTask(createTaskDto:CreateTaskDto):Promise<Task>{
       return this.repository.createTask(createTaskDto)
        
    }
    // getTaskById(id:string){
    // const found = this.task.find(x=>x.id==id)
    // if(!found){
    // throw new NotFoundException(`Task with ID ${id} not found`)
    // }
    
    // return found
    // }

    async getTaskById(id:number):Promise<Task>{
    const found = await this.repository.findOne(id)
    if(!found){
    throw new NotFoundException(`Task with ID ${id} not found`)
    }
    
    return found
    }
    async deleteTaskById(id:number):Promise<void>{
        const result = await this.repository.delete(id)
        if(!result.affected){
            throw new NotFoundException(`Task with ID ${id} not found`)
        } 
    }
    // updateTaskById(id:string,status:TaskStatus){
    //  const task= this.getTaskById(id);
    //  console.log("status",status);
     
    //  task.status=status;
    //  return task
    // }
}
