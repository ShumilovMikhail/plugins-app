import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

import { ArticleType } from '../types/article.type';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private readonly http = inject(HttpClient);
  private readonly cachedArticle = new BehaviorSubject<ArticleType | null>(null);
  public readonly article$: Observable<ArticleType | null> = this.cachedArticle
    .asObservable()
    .pipe(
      switchMap((cachedArticle) => {
        if (!cachedArticle) {
          this.http
            .get<ArticleType>('/api/article')
            .pipe(
              tap((article) => {
                this.cachedArticle.next(article);
              }),
            )
            .subscribe(() => {});
        }
        return this.cachedArticle.asObservable();
      }),
    );

  public updateArticle(article: ArticleType): void {
    this.http.post<ArticleType>('/api/article', article).subscribe();
    this.cachedArticle.next(article);
  }
}
