import { Component } from "@angular/core";
import { getRenderedText } from "@angular/core/src/render3";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Posts = [
    {
      title: "Mon premier post",
      contenu: "Je suis une chèvre",
      Likes: {{this.LoveIts}}
    },
    {
      title: "Mon deuxième post ",
      contenu: "J'aime le fromage de chèvre",
      Likes: this.LoveIts
    },
    {
      title: "Mon troisième post",
      contenu: "Je devrais manger plus de fromage de chèvre",
      Likes: this.LoveIts
    }
  ];
}
