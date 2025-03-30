import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  postService = inject(DataService);
  posts: Post[] = [];

  ngOnInit(){
    this.posts = this.postService.posts;
  }
  

}
