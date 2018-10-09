import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Posts = [
    {
      title : 'Mon premier post'
      contenu : 'Je suis une chèvre'
      
    }
  ]


  title = 'mon-blog';
}
