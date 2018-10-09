export class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at : Date = new Date();

  constructor(title, content, loveIts, created_at) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
  }
}
