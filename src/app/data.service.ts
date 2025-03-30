import { Injectable } from '@angular/core';
import { posts } from './post-data';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts = posts;

  constructor() { }

  getPostById(id:number): Post{
    return this.posts.filter(post => post.id == id)[0];
    // for(let i = 0; i < posts.length; i++){
    //   if(posts[i].id == id)
    //     return posts[i];
    // }
    // return posts[0];
  }
}
