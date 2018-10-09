import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Posts = [
    {
      title : 'Mon premier post',
      contenu : 'Je suis une chèvre',
      date : ''
    },
    {
      title : 'Mon deuxième post ',
      contenu : "J'aime le fromage de chèvre",
      date : ''
    },
    {
      title : 'Mon troisième post',
      contenu : 'Je devrais manger plus de fromage de chèvre',
      date : ''
    }
  ]


  title = 'mon-blog';
}
