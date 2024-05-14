import {
  AfterViewInit,
  Component,
  ComponentRef,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatestWith } from 'rxjs';

import { ArticleType } from '../../../types/article.type';
import { PluginsHostDirective } from './plugins-host.directive';
import { ArticleService } from '../../../services/article.service';
import { ContentItem } from '../../../types/contentItem.interface';
import { PluginsService } from '../../../services/plugins.service';
import { PluginsMap } from '../../../types/pluginsMap.interface';

interface PluginComponentType {
  data: any;
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, PluginsHostDirective],
  templateUrl: './article.component.html',
})
export class ArticleComponent implements AfterViewInit {
  @ViewChild(PluginsHostDirective, { static: true })
  private readonly pluginsHost!: PluginsHostDirective;
  @Input({ required: true }) article!: ArticleType;
  private readonly articleService = inject(ArticleService);
  private readonly pluginsService = inject(PluginsService);

  ngAfterViewInit(): void {
    const container: ViewContainerRef = this.pluginsHost.viewContainerRef;
    this.articleService.article$
      .pipe(combineLatestWith(this.pluginsService.plugins$))
      .subscribe(([article, pluginsMap]: [ArticleType, PluginsMap]) => {
        container.clear();

        article.forEach((contentItem: ContentItem) => {
          const foundPlugin = pluginsMap[contentItem.pluginSlug];

          if (foundPlugin) {
            this.loadComponent(container, foundPlugin.componentType, contentItem.data);
          }
        });
      });
  }

  private loadComponent(
    container: ViewContainerRef,
    component: Type<PluginComponentType>,
    data: unknown,
  ) {
    const componentRef: ComponentRef<PluginComponentType> =
      container.createComponent<PluginComponentType>(component);
    componentRef.instance.data = data;
    componentRef.changeDetectorRef.detectChanges();
  }
}
