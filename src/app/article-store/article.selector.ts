import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ArticleState } from "./article.state";

export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
  getArticleState, 
  (state: ArticleState) => state.articles 
);

export const getMessage = createSelector(
  getArticleState, 
  (state: ArticleState) => state.message
);