import {
  AfterContentInit,
  Component,
  ComponentRef,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { PluginsHostDirective } from '../plugins-host.directive';
import { InstalledPluginsService } from '../../../../services/installed-plugins.service';
import { InstalledPluginsMap } from '../../../../types/installedPluginsMap.interface';
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
export class RefComponent implements AfterContentInit {
  @Input({ required: true }) contentItem!: ContentItem;
  @ViewChild(PluginsHostDirective, { static: true })
  private readonly pluginsHost!: PluginsHostDirective;
  private readonly installedPluginsService = inject(InstalledPluginsService);

  ngAfterContentInit(): void {
    const container: ViewContainerRef = this.pluginsHost.viewContainerRef;
    container.clear();
    this.installedPluginsService.installedPlugins$.subscribe(
      (pluginsMap: InstalledPluginsMap) => {
        const foundPlugin = pluginsMap[this.contentItem.pluginSlug];
        if (foundPlugin) {
          this.loadComponent(container, foundPlugin.componentType, this.contentItem.data);
        }
      },
    );
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
