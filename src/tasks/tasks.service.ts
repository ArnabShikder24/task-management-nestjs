import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(TasksRepository) private tasksRepository: TasksRepository) {}
  // getAllTasks(): Array<Task> {
  //   return this.tasks;
  // }

  // getTaskWithFilters(filterDto: GetTaskFilterDto): Array<Task>{
  //   const { status, search } = filterDto;

  //   let tasks = this.tasks;

  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }

  //       return false;
  //     })
  //   }

  //   return tasks;
  // }

  // getTaskById(id: string): Task {
  //   const found = this.tasks.find((task) => task.id === id);

  //   if (!found) {
  //     throw new NotFoundException();
  //   }

  //   return found;

  // }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const newTask: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN
  //   };

  //   this.tasks.push(newTask);
  //   return newTask;
  // }

  // deleteTask(id: string): void {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }

  // updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto): Task {
  //   const task = this.getTaskById(id);
  //   task.status = updateTaskStatusDto.status;
  //   return task;
  // }
}
