import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { take } from 'rxjs';

import { ArticleService } from '../../services/article.service';
import { ArticleType } from '../../types/article.type';

interface EditorJSONForm {
  json: FormControl<string>;
}

@Component({
  selector: 'app-page-landing-editor-json',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './page-landing-editor-json.component.html',
})
export class PageLandingEditorJsonComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly articleService = inject(ArticleService);
  protected form!: FormGroup<EditorJSONForm>;

  ngOnInit(): void {
    this.articleService.article$
      .pipe(take(1))
      .subscribe((article: ArticleType) => {
        this.initializeForm(article);
      });
  }

  onSubmit(): void {
    if (this.form && this.form.valid) {
      const json: string = this.form.value.json as string;
      this.articleService.updateArticle(json);
      this.back();
    }
  }

  private initializeForm(article: ArticleType): void {
    this.form = this.fb.group({
      json: new FormControl(JSON.stringify(article, null, 2), {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  private back(): void {
    this.router.navigateByUrl('/editor');
  }
}
