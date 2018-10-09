import { Component, OnInit } from '@angular/core';
import { Post } from "../app/post";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() Post

  


  constructor() { }

  ngOnInit() {
  }

  

}
