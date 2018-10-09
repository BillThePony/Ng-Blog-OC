import { Component, OnInit, Input } from "@angular/core";
import {}

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
