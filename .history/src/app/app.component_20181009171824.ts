import { Component } from "@angular/core";
import { Post } from "../app/model/post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  
  arrayPost :  Post[] = [
    new Post("Mon premier post", "Chèvre"),
    new Post("Mon deuxième post", "Fromage"),
    new Post("Mon deuxième post", "Fromage")
  ];
}
