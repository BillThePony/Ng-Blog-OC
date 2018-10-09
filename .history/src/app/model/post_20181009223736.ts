export class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at : Date = new Date();

  constructor(title, content, loveIts) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
  }
}
