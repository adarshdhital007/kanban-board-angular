// task.service.ts
import { Injectable } from '@angular/core';
import { Task } from 'src/task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.tasks = [
      new Task(
        1,
        'Angular Adventure',
        'todo',
        "Every line of angular code feels like caffeine to me!"
      ),
      new Task(
        2,
        'Adding User Authentication',
        'todo',
        "I'm planning to secure my website with user authentication using Angular and TypeScript."
      ),
      new Task(
        3,
        'User-Friendly Design',
        'inprogress',
        "Bootstrap is key for me to go."
      ),
      new Task(
        4,
        'Optimizing My Website',
        'done',
        "I've optimized my website, and now it runs at lightning speed"
      ),
    ];
  }

  getTasks(status: string): Task[] {
    return this.tasks.filter((task) => task.status === status);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  moveTask(task: Task, fromStatus: string, toStatus: string): void {
    const foundTaskIndex = this.tasks.findIndex((t) => t.id === task.id);

    if (foundTaskIndex !== -1) {
      this.tasks[foundTaskIndex].status = toStatus;
    }
  }
}
