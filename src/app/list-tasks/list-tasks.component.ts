import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent {

  constructor(
    public taskServ: TasksService
  ) { }

  onInit() {
  }

  completeTask(index: any, event: any,) {
    this.taskServ.updateTasks(index, event.checked);
  }
  deleteTask(index: number) {
    this.taskServ.deleteTasks(index)
  }
}
