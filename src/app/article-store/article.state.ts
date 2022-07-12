import { Iarticle } from './model/article';

export interface AppState {
  articleState: ArticleState;
}

export interface ArticleState {
  articles: Iarticle[];
  message: any;
}
