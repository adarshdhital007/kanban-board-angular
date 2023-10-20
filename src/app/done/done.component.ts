import { Component, Input } from '@angular/core';
import { Task } from 'src/task/task.model';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
})
export class DoneComponent {
  @Input() task!: Task;
}
