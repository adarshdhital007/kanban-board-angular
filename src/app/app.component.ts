import { Component } from '@angular/core';
import { Task } from 'src/task/task.model';
import { TaskService } from './task.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  todoTasks: Task[] = [];
  isAddTaskFormVisible: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.todoTasks = this.getTasks('todo');
  }

  getTasks(status: string): Task[] {
    return this.taskService.getTasks(status);
  }

  openAddTaskForm() {
    $('#addTaskModal').modal('show'); 
  }

  addTask(newTask: Task) {
    this.taskService.addTask(newTask);
    $('#addTaskModal').modal('hide'); 
  }
}
