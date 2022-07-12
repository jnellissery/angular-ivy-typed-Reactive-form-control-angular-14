import { CommonModule } from '@angular/common';
import { Component, OnInit, VERSION } from '@angular/core';
import {
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { PersonService } from '../person.service';
import { ArticleService } from './article/article.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  titles: any[] = [];
  fg: FormGroup;
  
  constructor(
    private fb: UntypedFormBuilder,
    private svc: PersonService,
    private svc1: ArticleService
  ) {}
  ngOnInit(): void {
    this.fg = this.fb.group({
      titles: [''],
      title: [''],
      firstname: [''],
      lastname: ['', Validators.required],
    });

    this.svc.gettitles().subscribe((res) => (this.titles = res));
    this.svc1.getAllArticles().subscribe((result) => {
      console.log(result[0].category);
    });
  }

  post() {
    console.log(this.fg.value);
  }
}
