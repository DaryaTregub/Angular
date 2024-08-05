import { Injectable } from "@angular/core"
import { Inject } from "@angular/core"

@Injectable({
    providedIn: 'root'
})

export class RandomArr {
    constructor() { }

    initial_arr!: any[]
    new_arr!: any[]

    createRandomArr() {
        return this.new_arr = Array(this.initial_arr.length).fill(null)
            .map((_, i) => [Math.random(), i])
            .sort(([a], [b]) => a - b)
            .map(([, i]) => this.initial_arr[i])
    }
}
