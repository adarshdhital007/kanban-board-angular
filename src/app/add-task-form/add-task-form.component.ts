import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/task/task.model';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css'],
})
export class AddTaskFormComponent {
  @Output() taskAdded = new EventEmitter<Task>();

  newTaskName: string = '';
  newTaskDescription: string = '';
  newTaskStatus: string = 'todo';

  addTask() {
    if (this.newTaskName.trim() !== '') {
      const newTask = new Task(
        this.generateUniqueId(),
        this.newTaskName,
        this.newTaskStatus,
        this.newTaskDescription
      );
      this.taskAdded.emit(newTask);
      this.newTaskName = '';
      this.newTaskDescription = '';
      this.newTaskStatus = 'todo';
    }
  }

  generateUniqueId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
