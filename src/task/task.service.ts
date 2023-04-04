import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(TaskEntity)
    private taskReposity : Repository<TaskEntity>  ){}
  
  create(createTaskDto: CreateTaskDto) {
    return this.taskReposity.save(createTaskDto);
  }

  findAll() {
    return this.taskReposity.find();
  }

  findOne(id: number) {
     return this.taskReposity.findOneBy({id});
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskReposity.update(id, updateTaskDto);
  }

  async remove(id: number) {
    return this.taskReposity.remove(await this.findOne(id))
  }

}
