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
import { LoadedPluginsService } from '../../../../services/loaded-plugins.service';
import { LoadedPluginsMap } from '@plugins/common-libraries';
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
  private readonly LoadedPluginsService = inject(LoadedPluginsService);

  ngAfterContentInit(): void {
    const container: ViewContainerRef = this.pluginsHost.viewContainerRef;
    container.clear();
    this.LoadedPluginsService.LoadedPlugins$.subscribe((pluginsMap: LoadedPluginsMap) => {
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
