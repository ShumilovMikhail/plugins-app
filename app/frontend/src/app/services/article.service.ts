import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, delay, shareReplay } from 'rxjs';

import { ArticleType } from '../types/article.type';
import { DataStorageService } from './data-storage.service';
import { DataStorageTypes } from '../types/dataStorageTypes';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private readonly dataStorageService = inject(DataStorageService);
  private readonly article = new BehaviorSubject<ArticleType>(
    (this.dataStorageService.getItem(DataStorageTypes.ARTICLE) as ArticleType) || [],
  );
  public readonly article$ = this.article.asObservable().pipe(delay(100), shareReplay(1));

  public updateArticle(article: ArticleType): void {
    this.article.next(article);
    this.dataStorageService.setItem(DataStorageTypes.ARTICLE, article);
  }
}
