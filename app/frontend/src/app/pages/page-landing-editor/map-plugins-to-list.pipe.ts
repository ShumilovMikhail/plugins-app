import { Pipe, PipeTransform } from '@angular/core';

import { InstalledPluginsMap } from '../../types/installedPluginsMap.interface';
import { InstalledPlugin } from '../../types/installedPlugin.interface';

@Pipe({
  name: 'mapPluginsToList',
  standalone: true,
})
export class MapPluginsToListPipe implements PipeTransform {
  transform(pluginsMap: InstalledPluginsMap | null): InstalledPlugin[] | null {
    return pluginsMap
      ? Object.keys(pluginsMap).map((pluginKey: string) => pluginsMap[pluginKey])
      : null;
  }
}
