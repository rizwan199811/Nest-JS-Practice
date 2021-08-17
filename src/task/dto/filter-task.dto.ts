import { Optional } from "@nestjs/common";
import { IsIn, IsNotEmpty } from "class-validator";
import { TaskStatus } from "../task.model";

export class FilterTaskDto{
    @Optional()
    @IsIn([TaskStatus.OPEN,TaskStatus.DONE,TaskStatus.IN_PROGRESS])
    status:TaskStatus;

    @Optional()
    @IsNotEmpty()
    search:string
}