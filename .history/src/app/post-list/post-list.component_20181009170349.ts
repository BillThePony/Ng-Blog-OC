import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../app/model/post";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  @Input()
  Post;

  constructor() {}

  ngOnInit() {}
}
