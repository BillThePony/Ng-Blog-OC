import { Component } from "@angular/core";
import { Post } from "../app/model/post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  arrayPost: Post[] = [
    new Post("Mon premier post", "Chèvre" , 0),
    new Post("Mon deuxième post", "Fromage" , 0),
    new Post("Mon troisème post", "Fromage de chèvre")
  ];
}
