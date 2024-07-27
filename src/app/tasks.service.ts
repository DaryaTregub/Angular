import { Injectable } from '@angular/core';
import { Tasks } from './tasks';
import { Store } from '@ngxs/store';
import { TodoState } from './todos.state';
import { TodoUpdate } from './model/todo';

@Injectable({
  providedIn: 'root'
})


export class TasksService {
  tasks_arr!: Tasks[]
  task_text!: string
  task!: Tasks
  private taskId: number = 0;
  constructor(
    private store: Store
  ) { }

  createNewTask() {
    this.taskId = this.taskId + 1;
    this.task = {
      id: this.taskId,
      complited: false,
      text: this.task_text
    }
    this.tasks_arr = this.store.selectSnapshot(TodoState.todosState);
    this.tasks_arr.push(this.task)
    this.store.dispatch(
      new TodoUpdate(this.tasks_arr)
    )
    console.log(this.store.selectSnapshot(TodoState.todosState));

  }

  updateTasks(index: number, check: boolean) {
    this.tasks_arr = this.store.selectSnapshot(TodoState.todosState);
    this.tasks_arr[index].complited = check;
    this.store.dispatch(
      new TodoUpdate(this.tasks_arr)
    );
  }

  deleteTasks(index: number) {
    this.tasks_arr = this.store.selectSnapshot(TodoState.todosState);
    this.tasks_arr.splice(index, 1);
    this.store.dispatch(
      new TodoUpdate(this.tasks_arr)
    );
  }

}
