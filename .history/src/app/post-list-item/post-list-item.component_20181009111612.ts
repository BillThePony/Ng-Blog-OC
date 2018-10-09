import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
    return this.LoveIts;
  }

  iDontLoveIt() {
    this.LoveIts -= 1;
    return this.LoveIts;
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
