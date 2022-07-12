import { createAction, props } from '@ngrx/store';
import { Iarticle } from './model/article';
 

export const ShowAllAction = createAction('[ARTICLE] Show All');

export const ShowAllSuccessAction = createAction('[ARTICLE] Show All Success', props<{ payload: Iarticle[]}>());

export const ShowAllFailureAction = createAction('[ARTICLE] Show All Failure', props<{ payload: any}>());


export const CreateAction = createAction('[ARTICLE] Create', props<{ payload: Iarticle}>());

export const CreateSuccessAction = createAction('[ARTICLE] Create Success', props<{ payload: Iarticle}>());

export const CreateFailureAction = createAction('[ARTICLE] Create Failure', props<{ payload: any}>());

export const GetByIdAction = createAction('[ARTICLE] Get by Id', props<{ payload: string}>());

export const GetByIdSuccessAction = createAction('[ARTICLE] Get by Id Success', props<{ payload: Iarticle[]}>());

export const GetByIdFailureAction = createAction('[ARTICLE] Get by Id Failure', props<{ payload: any}>());

export const ResetAction = createAction('[ARTICLE] Reset');