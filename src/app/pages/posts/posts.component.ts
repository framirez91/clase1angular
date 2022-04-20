import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : any[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPostsData().subscribe((resp:any) => this.posts = resp);
    
  }

}
