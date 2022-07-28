import {
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
  Action,
} from '@ngrx/store';
import * as fromActions from './article.actions';
import { ArticleState } from './article.state';
export const initialState: ArticleState = { articles: [], message: '' };
const _articleReducer = createReducer(
  initialState,
  on(fromActions.ShowAllSuccessAction, (state, { payload }) => ({
    articles: payload,
    message: 'Success',
  })),
  on(fromActions.ShowAllFailureAction, (state, { payload }) => ({
    articles: [],
    message: 'ShowAll Failure',
  })),
  on(fromActions.CreateSuccessAction, (state, { payload }) => ({
    articles: [payload],
    message: 'Article Created.',
  })),
  on(fromActions.CreateFailureAction, (state, { payload }) => ({
    articles: [],
    message: payload,
  })),
  on(fromActions.GetByIdSuccessAction, (state, { payload }) => ({
    articles: payload,
    message: 'Success',
  })),
  on(fromActions.GetByIdFailureAction, (state, { payload }) => ({
    articles: [],
    message: 'Error on get By Id ',
  })),
  on(fromActions.ResetAction, (state) => ({ articles: [], message: '' }))
);
export function articleReducer(state: any, action: Action) {
  return _articleReducer(state, action);
}
