export interface Likes {
    id: string | null |undefined
}

export class LikesUpdate {
    static readonly type = `[Likes] : Likes Update`;
    constructor(public payload: any) { }
}