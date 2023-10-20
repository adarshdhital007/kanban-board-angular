import { Component, Input } from '@angular/core';
import { Task } from 'src/task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './inprogress.component.html',
})
export class InProgressComponent {
  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  moveTaskToDone(task: Task) {
    this.taskService.moveTask(task, 'inprogress', 'done');
  }
}
