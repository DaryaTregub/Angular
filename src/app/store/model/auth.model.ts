
export interface AutentificationInterface {
    id: string | null | undefined,
    expiresIn: number | null,
    jwtToken: string | null,
    username: string | null,
    role: string | null,
    avatar: string | null,
    firstName: string | null,
    lastName: string | null,
    middleName: string | null
}


export class AuthUpdate {
    static readonly type = '[Auth]: Auth Update';
    constructor(public payload: AutentificationInterface) { }
}
