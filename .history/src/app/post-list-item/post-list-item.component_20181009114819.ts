import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  <app-post-list *ngFor="let post of Posts" [postTitle]="Posts.title" [postContent]="Posts.contenu" [postLove]="Posts.LoveIts"></app-post-list>

      </ul>

      <button class="btn btn-success" (click)="iLoveIt()">I Love it !</button>
      <button class="btn btn-success" (click)="iDontLoveIt()">I don't Like it !</button>


  constructor() { }

  ngOnInit() {
  }

  

}
