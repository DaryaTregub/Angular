import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from "@angular/core";
import { Todo, TodoUpdate } from './model/todo';


@State({
    name: 'TodoState',
    defaults: {
        tasks_arr: [] = []
    }
})

@Injectable()
export class TodoState {

    @Selector()
    static todosState(state:any) {
        return state.tasks_arr;
    }
    
    @Action(TodoUpdate)
    updateTodos(
        ctx:StateContext<any>,
        action: TodoUpdate
    ) {
        ctx.patchState({
            tasks_arr: action.payload
        })
    }


}