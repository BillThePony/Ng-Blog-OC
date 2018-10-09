import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../model/post";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.css"]
})
export class PostListItemComponent implements OnInit {
  @Input()
  postContenu: Post[];

  loveIts: number = 0;
  Like: boolean;

  constructor() {}

  ngOnInit() {}

  iLoveIt() {
    this.loveIts += 1;
  }
  i;
  iDontLoveIt() {
    this.loveIts -= 1;
  }

  defineColor(){
    if(this.loveIts > 0){
      this.Like = true;
    }
    return
  }
}
