import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  LoveIts = 0;

  Posts = [
    {
      title: "Mon premier post",
      contenu: "Je suis une chèvre"
      Likes: 
    },
    {
      title: "Mon deuxième post ",
      contenu: "J'aime le fromage de chèvre",
      
    },
    {
      title: "Mon troisième post",
      contenu: "Je devrais manger plus de fromage de chèvre",
      
    }
  ];

  iLoveIt() {
    this.LoveIts += 1;
  }

  iDontLoveIt() {
    this.LoveIts -= 1;
  }
}
