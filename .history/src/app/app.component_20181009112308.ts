import { Component } from "@angular/core";
import { post } from "../app/post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  Posts = [
            new post (title1, content1, loveIts)
  ]

}
