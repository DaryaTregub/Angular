export interface Todo {
    id: number | null
    text: string,
    complited: boolean
}

export class TodoUpdate {
    static readonly type = `[Todos] : Todos Update`;
    constructor(public payload : Todo[]) {}
}