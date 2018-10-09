import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  LoveIts: number;
  Like: boolean;

  Posts = [
    {
      title: "Mon premier post",
      content: "Je suis une chèvre",
      likes: this.LoveIts
    },
    {
      title: "Mon deuxième post ",
      content: "J'aime le fromage de chèvre",
      likes: this.LoveIts
    },
    {
      title: "Mon troisième post",
      content: "Je devrais manger plus de fromage de chèvre",
      likes: this.LoveIts
    }
  ];

  iLoveIt() {
    this.LoveIts += 1;
  }

  iDontLoveIt() {
    this.LoveIts -= 1;
  }

  getColor() {
    if (this.LoveIts > 0) {
      this.Like = true;
      return "green";
    }
    if (this.LoveIts < 0) {
      this.Like = false;
      return "red";
    }
  }
}
