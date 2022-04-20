import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : any[] = [1,1,1,1,1];

  constructor() { }

  ngOnInit(): void {
  }

}
