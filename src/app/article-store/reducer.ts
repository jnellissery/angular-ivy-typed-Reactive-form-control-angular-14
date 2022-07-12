import { ActionReducerMap } from '@ngrx/store';
import * as fromReducer from './article.reducer';
import { AppState } from './article.state';

export const reducers: ActionReducerMap<AppState> = {
  articleState: fromReducer.articleReducer
};