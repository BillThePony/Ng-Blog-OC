import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../model/post";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  @Input()
  post;

  constructor() {}

  ngOnInit() {}
}
