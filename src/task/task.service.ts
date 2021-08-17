import { Injectable, NotFoundException } from '@nestjs/common';
import { Task ,TaskStatus} from './task.model';
import { CreateTaskDto} from '../task/dto/create-task.dto';
import * as uuid from "uuidv1";
@Injectable()
export class TaskService {
    private task:Task[]=[];
    getAllTasks():Task[]{
        return this.task;
    }
    createTask(createTaskDto:CreateTaskDto){
        let {title,description}=createTaskDto
        const task:Task={
          id:uuid(),
          title,
          description,
          status:TaskStatus.OPEN
        }
        this.task.push(task)
        return task;

  
    }
    getTaskById(id:string){
    const found = this.task.find(x=>x.id==id)
    if(!found){
    throw new NotFoundException(`Task with ID ${id} not found`)
    }
    
    return found
    }
    deleteTaskById(id:string){
        const found = this.getTaskById(id)
        return this.task.filter(x=>x.id!==found.id)
    }
    updateTaskById(id:string,status:TaskStatus){
     const task= this.getTaskById(id);
     console.log("status",status);
     
     task.status=status;
     return task
    }
}
