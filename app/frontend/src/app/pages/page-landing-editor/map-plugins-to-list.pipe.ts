import { Pipe, PipeTransform } from '@angular/core';

import { LoadedPluginsMap } from '../../types/loadedPluginsMap.interface';
import { LoadedPlugin } from '../../types/loadedPlugin.interface';

@Pipe({
  name: 'mapPluginsToList',
  standalone: true,
})
export class MapPluginsToListPipe implements PipeTransform {
  transform(pluginsMap: LoadedPluginsMap | null): LoadedPlugin[] | null {
    return pluginsMap
      ? Object.keys(pluginsMap).map((pluginKey: string) => pluginsMap[pluginKey])
      : null;
  }
}
