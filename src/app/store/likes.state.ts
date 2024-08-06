import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from "@angular/core";
import { Likes } from '../others/likes';
import { LikesUpdate } from './model/likes';


@State({
    name: 'LikesState',
    defaults: {
        likes_arr: [] = []
    }
})

@Injectable()
export class LikesState {

    @Selector()
    static getLikes(state:any) {
        return state.likes_arr;
    }
    
    @Action(LikesUpdate)
    updateTodos(
        ctx:StateContext<any>,
        action: LikesUpdate
    ) {
        ctx.patchState({
            likes_arr: action.payload
        })
    }


}