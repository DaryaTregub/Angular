import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
  todoForm: any;
  constructor(
    public tasksServ: TasksService
  ) { }

  task !: string

  addTask() {
    this.tasksServ.task_text = this.task;
    this.tasksServ.createNewTask();
  }
}
