export class Article {
  title: string;
  votes: number;
  link: string;

  constructor(title: string, votes: number, link: string) {
    this.title = title;
    this.link = link;
    this.votes = votes;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}
