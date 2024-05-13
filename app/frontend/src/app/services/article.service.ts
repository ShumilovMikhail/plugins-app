import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';

import { ArticleType } from '../types/article.type';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private readonly article = new BehaviorSubject<ArticleType>([]);
  public readonly article$ = this.article.asObservable().pipe(delay(100));
}
