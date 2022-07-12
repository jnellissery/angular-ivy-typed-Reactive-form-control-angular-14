import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticleState } from '../article-store/article.state';
import { Iarticle } from '../article-store/model/article';
import * as fromReducer from '../article-store/article.reducer';
import * as fromActions from '../article-store/article.actions';
import { getArticles, getMessage } from '../article-store/article.selector';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
articles$:Observable<Iarticle[]>;
message$:Observable<any>;
task='';
articleForm =  this.fb.group({
  id: ['', Validators.required ],
  title: new FormControl('',[Validators.required, Validators.maxLength(100)]),
  category: ''
});
  constructor(private fb: FormBuilder,private store: Store<ArticleState>) {
    this.articles$ = store.select(getArticles);
		this.message$ = store.select(getMessage);

   }
   get id() {
		return this.articleForm.get('id');
	}
	onFormSubmit() {
		if(this.articleForm.valid) {
		   let article:Iarticle = this.articleForm.value;
		   this.createArticle(article);
		   this.articleForm.reset();
		}
	 }
	createArticleView(){
		this.task = 'create';
		this.store.dispatch(fromActions.ResetAction());
	}
	getArticleByIdView(){
		this.task = 'get';
		this.store.dispatch(fromActions.ResetAction());
	}
	loadAllArticles(){
		this.task = 'all';
		this.store.dispatch(fromActions.ShowAllAction());
	}
	createArticle(article: Iarticle){
		this.store.dispatch(fromActions.CreateAction({payload: article}));
	}
	searchArticleById(articleId: string){
		this.store.dispatch(fromActions.GetByIdAction({payload: articleId}));
	}


  ngOnInit() {
  }

}