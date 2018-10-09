import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  post1 = 'Mon premier post'
  post2 = 'mon deuxième post'


  constructor() { }

  ngOnInit() {
  }

}
