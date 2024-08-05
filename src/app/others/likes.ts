import { Injectable } from '@angular/core';

import { Posts } from "../interfaces/posts";
import { Store } from '@ngxs/store';

import { MainService } from '../servises/main.service';
import { LikePosts } from '../interfaces/like-posts';
@Injectable({
    providedIn: 'root'
})
export class Likes {
    constructor(
        private store: Store,
        private mainServ:MainService
    ) { }

    posts_arr!: LikePosts[]
    likes_arr!: any[]
    result!: any[];
    id!: string
    like!: boolean;
   

    // public checkLike() {
    //     // const arr = this.store.selectSnapshot(LikesState.getLikes).likes_arr
    //     // console.log(arr)
    //     // console.log(this.like)
    //     // // console.log(this.id)
    //     // // console.log(this.posts_arr)
    //     // // console.log(this.likes_arr)
    //     // // let like_id = this.likes_arr.findIndex((arr: { id: string; }) => arr.id === this.id)
    //     // // let post_id = this.posts_arr.findIndex((arr: { id: string; }) => arr.id === this.id)
    //     // // console.log(post_id)
    //     // // // if (this.likes_arr.length > 0 && like_id >= 0) {
    //     // // //     console.log(like_id)
    //     // // //     console.log(post_id)
    //     // // // //     this.likes_arr[like_id].like = this.posts_arr[post_id].like;
    //     // // // } else {
    //     // // console.log(like_id)
    //     // // console.log(post_id)
    //     // // const item = {
    //     // //     id: this.posts_arr[post_id].id,
    //     // //     like: this.posts_arr[post_id].like
    //     // // }
    //     // if (!arr.likes_arr) {
    //     //     const item = {
    //     //         id: this.id,
    //     //         like: this.like
    //     //     }
    //     //     arr.push(item)
    //     //     this.store.dispatch(new LikesUpdate({
    //     //         likes_arr: arr
    //     //     }))
    //     // }
    // }
    // getLikes() {
    //     console.log(this.mainServ.like_arr)
    //     // const arr = this.store.selectSnapshot(LikesState.getLikes).likes_arr
    //     // console.log(this.likes_arr)
    //     // if (arr.likes_arr) {
    //     //     arr.likes_arr.forEach((element: any, index: number) => {
    //     //         let post_id = this.posts_arr.findIndex((arr: { id: string; }) => arr.id === element.id)
    //     //         this.posts_arr[post_id].like = arr.likes_arr[index].like
    //     //         console.log(this.posts_arr[post_id].like)
    //     //     });
    //     // }
    //     // console.log(arr.likes_arr)


    // }


}

