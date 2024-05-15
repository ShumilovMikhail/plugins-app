import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

import { ArticleType } from '../../../types/article.type';
import { PluginsHostDirective } from './plugins-host.directive';
import { RefComponent } from './ref/ref.component';
import { ContentItem } from '../../../types/contentItem.interface';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-article',
  standalone: true,
  templateUrl: './article.component.html',
  imports: [CommonModule, PluginsHostDirective, RefComponent, DragDropModule],
})
export class ArticleComponent {
  @Input({ required: true }) article!: ArticleType;
  private readonly articleService = inject(ArticleService);

  drop($event: CdkDragDrop<ArticleType, any, any>) {
    if ($event.container !== $event.previousContainer) {
      const contentItem: ContentItem = $event.item.data;
      this.article.splice($event.currentIndex, 0, contentItem);
      this.articleService.updateArticle(this.article);
    } else {
      moveItemInArray(this.article, $event.previousIndex, $event.currentIndex);
    }
  }
}
