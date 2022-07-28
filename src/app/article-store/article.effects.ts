import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  switchMap,
  mergeMap,
  catchError,
  debounceTime,
} from 'rxjs/operators';
import * as fromActions from './article.actions';
import { ArticleService } from '../article/article.service';

@Injectable()
export class ArticleEffects {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  loadAllArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.ShowAllAction),
      switchMap(() =>
        this.articleService.getAllArticles().pipe(
          map((data) => {
            if (data && data.length > 1)
              return fromActions.ShowAllSuccessAction({ payload: data });
            else throw Error;
          }),
          catchError((error) =>
            of(fromActions.ShowAllFailureAction({ payload: error }))
          )
        )
      )
    )
  );

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.CreateAction),
      map((action) => action.payload),
      mergeMap((article) =>
        this.articleService.createArticle(article).pipe(
          map((res) => fromActions.CreateSuccessAction({ payload: res })),
          catchError((error) =>
            of(fromActions.CreateFailureAction({ payload: error }))
          )
        )
      )
    )
  );

  searchArticleById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.GetByIdAction),
      debounceTime(500),
      map((action) => action.payload),
      switchMap((id) =>
        this.articleService.getArticleById(id).pipe(
          map((res) => {
            if (res && res.length > 0)
              return fromActions.GetByIdSuccessAction({ payload: res });
            else throw Error;
          }),
          catchError((error) =>
            of(fromActions.GetByIdFailureAction({ payload: error }))
          )
        )
      )
    )
  );
}
