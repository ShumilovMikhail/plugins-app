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

import { ArticleType } from '../../../types/article.type';
import { PluginsHostDirective } from './plugins-host.directive';
import { ArticleService } from '../../../services/article.service';
import { ContentItem } from '../../../types/contentItem.interface';
import { PluginsMap } from './plugins-map-injection-token';
import { pluginsMap } from './plugins-map';

interface PluginComponentType {
  data: any;
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, PluginsHostDirective],
  providers: [
    {
      provide: PluginsMap,
      useValue: pluginsMap,
    },
  ],
  templateUrl: './article.component.html',
})
export class ArticleComponent implements AfterViewInit {
  @ViewChild(PluginsHostDirective, { static: true })
  private readonly pluginsHost!: PluginsHostDirective;
  @Input({ required: true }) article!: ArticleType;

  private readonly pluginsMap = inject(PluginsMap);
  private readonly articleService = inject(ArticleService);

  ngAfterViewInit(): void {
    const container: ViewContainerRef = this.pluginsHost.viewContainerRef;
    this.articleService.article$.subscribe((article: ArticleType) => {
      container.clear();

      article.forEach((contentItem: ContentItem) => {
        const foundPlugin = this.pluginsMap[contentItem.pluginSlug];

        if (foundPlugin) {
          this.loadComponent(
            container,
            foundPlugin as Type<PluginComponentType>,
            contentItem.data,
          );
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
