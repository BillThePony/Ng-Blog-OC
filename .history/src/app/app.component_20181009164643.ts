import { Component } from "@angular/core";
import { Post } from "../app/post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  ArrayPosts = [
    new Post("Mon premier post", "Chèvre"),
    new Post("Mon deuxième post", "Fromage"),
    new Post("Mon deuxième post", "Fromage")
  ];
}
