import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleType } from '../../../types/article.type';
import { PluginsHostDirective } from './plugins-host.directive';
import { RefComponent } from './ref/ref.component';

@Component({
  selector: 'app-article',
  standalone: true,
  templateUrl: './article.component.html',
  imports: [CommonModule, PluginsHostDirective, RefComponent],
})
export class ArticleComponent {
  @Input({ required: true }) article!: ArticleType;
}
