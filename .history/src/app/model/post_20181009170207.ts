export class Post {
  title: string;
  content: string;
  loveIts: number;

  constructor(title, content, loveIts?) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
  }
}
