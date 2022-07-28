import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Iarticle } from '../article-store/model/article';
@Injectable({ providedIn: 'root' })
export class ArticleService {
  url = '/api/articles';
  constructor(private http: HttpClient) {}
  getAllArticles(): Observable<Iarticle[]> {
    return this.http.get<Iarticle[]>(this.url);
  }
  createArticle(article: Iarticle): Observable<Iarticle> {
    return this.http.post<Iarticle>(this.url, article);
  }
  getArticleById(id: string): Observable<Iarticle[]> {
    return this.http.get<Iarticle[]>(this.url + '?id=' + id);
  }
}
