import { Injectable } from "@angular/core"
import { Action, Selector, State, StateContext } from "@ngxs/store"
import { AutentificationInterface, AuthUpdate } from "./model/auth.model"

@State({
    name: 'AuthState',
    defaults:
    {
        id: null,
        expiresIn: null,
        jwtToken: null,
        username: null,
        role: null,
        avatar: null,
        firstName: null,
        lastName: null,
        middleName: null
    }

})
@Injectable()
export class AuthState {
    @Selector()
    static getAuth(state: AutentificationInterface) {
        return state;
    }

    @Selector()
    static getToken(state: AutentificationInterface) {
        return state.jwtToken;
    }

    @Selector()
    static getRole(state: AutentificationInterface) {
        return state.role;
    }

    @Selector()
    static getUsername(state: AutentificationInterface) {
        return state.username;
    }

    @Action(AuthUpdate)
    updateAuth(
        ctx: StateContext<any>,
        action: AuthUpdate
    ) {
        ctx.patchState({
            id: action.payload.id,
            expiresIn: action.payload.expiresIn,
            jwtToken: action.payload.jwtToken,
            username: action.payload.username,
            role: action.payload.role,
            avatar: action.payload.avatar,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            middleName: action.payload.middleName
        })
    }

}