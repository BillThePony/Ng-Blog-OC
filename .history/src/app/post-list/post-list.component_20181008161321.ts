import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  post1: {
    title: string;
    content: string;
    createdAt: Date;
    loveIts: number;
  };

  post2: {[ngStyle]="{color : getColor()}
    title: string;
    content: string;
    createdAt: Date;
    loveIts: number;
  };

  post3: {
    title: string;
    content: string;
    createdAt: Date;
    loveIts: number;
  };

  constructor() {}

  ngOnInit() {}
}
