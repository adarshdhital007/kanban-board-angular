// todo.component.ts
import { Component, Input } from '@angular/core';
import { Task } from 'src/task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() task!: Task;
  tasks: Task[] = [];
  newTaskName: string = '';
  newTaskDescription: string = '';
  isAddTaskFormVisible: boolean = false;

  constructor(private taskService: TaskService) {}

  moveTaskToInProgress(task: Task) {
    this.taskService.moveTask(task, 'todo', 'inprogress');
  }
  openAddTaskForm() {
    this.isAddTaskFormVisible = true;
  }

  addTask(newTask: Task) {
    this.taskService.addTask(newTask);
    this.isAddTaskFormVisible = false;
  }
}
