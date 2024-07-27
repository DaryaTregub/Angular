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
  
  completeTask(event: any, index:any) {
    console.log(event.checked);
    this.taskServ.updateTasks(index, event.checked)
 
  }
}
