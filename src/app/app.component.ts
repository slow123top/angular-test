import {Component} from '@angular/core';
import {Article} from './article/article.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myForm: FormGroup;
  articles: Article[];

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['dasdasdas']
    });
    this.articles = [
      new Article('angular1', 10, 'http://baidu.com'),
      new Article('angular2', 5, 'http://sina.com'),
      new Article('angular3', 30, 'http://google.com')
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`adding article title:${title.value} and link:${link.value}`);
    this.articles.push(new Article(title.value, 0, link.value));
    return false;
  }

  sortArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  onSubmit(form: any): void {
    console.log(`value is`, form);
  }
}
