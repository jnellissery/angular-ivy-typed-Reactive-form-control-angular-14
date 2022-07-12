import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiService, TestData } from './api/api-service';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './article-store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './article-store/article.effects';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ArticleEffects]),
    HttpClientInMemoryWebApiModule.forRoot(ApiService, { delay: 500 }),
    HttpClientInMemoryWebApiModule.forRoot(TestData, { delay: 500 }),
  ],
  exports: [CommonModule],
  declarations: [AppComponent, HelloComponent, ArticleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
