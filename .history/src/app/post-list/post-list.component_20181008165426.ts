import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  LoveIts = 0;
  Like: boolean;

  @Input()
  postTitle: string;
  @Input()
  postContent: string;
  @Input()
  postLove: number;

  // post1: {
  //   title: string;
  //   content: string;
  //   loveIts: number;
  // };

  // post2: {
  //   title: string;
  //   content: string;
  //   loveIts: number;
  // };

  // post3: {
  //   title: string;
  //   content: string;
  //   loveIts: number;
  // };

  constructor() {}

  ngOnInit() {}

  iLoveIt() {
    this.LoveIts += 1;
  }

  iDontLoveIt() {
    this.LoveIts -= 1;
  }

  getColor() {
    if (this.LoveIts > 0) {
      this.Like = true;
      return "green";
    }
    if (this.LoveIts < 0) {
      this.Like = false;
      return "red";
    }
  }
}
