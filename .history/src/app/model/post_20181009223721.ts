export class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at

  constructor(title, content, loveIts) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
  }
}
