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

import { PluginsHostDirective } from '../plugins-host.directive';
import { PluginsService } from '../../../../services/plugins.service';
import { PluginsMap } from '../../../../types/pluginsMap.interface';
import { ContentItem } from '../../../../types/contentItem.interface';

interface PluginComponentType {
  data: any;
}

@Component({
  selector: 'app-ref',
  standalone: true,
  styles: [':host {display: block}'],
  imports: [PluginsHostDirective],
  templateUrl: './ref.component.html',
})
export class RefComponent implements AfterViewInit {
  @Input({ required: true }) contentItem!: ContentItem;
  @ViewChild(PluginsHostDirective, { static: true })
  private readonly pluginsHost!: PluginsHostDirective;
  private readonly pluginsService = inject(PluginsService);

  ngAfterViewInit(): void {
    const container: ViewContainerRef = this.pluginsHost.viewContainerRef;
    container.clear();
    this.pluginsService.plugins$.subscribe((pluginsMap: PluginsMap) => {
      const foundPlugin = pluginsMap[this.contentItem.pluginSlug];
      if (foundPlugin) {
        this.loadComponent(container, foundPlugin.componentType, this.contentItem.data);
      }
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
