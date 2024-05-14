import { Pipe, PipeTransform } from '@angular/core';

import { PluginsMap } from '../../types/pluginsMap.interface';
import { Plugin } from '../../types/plugin.interface';

@Pipe({
  name: 'mapPluginsToList',
  standalone: true,
})
export class MapPluginsToListPipe implements PipeTransform {
  transform(pluginsMap: PluginsMap | null): Plugin[] {
    return pluginsMap
      ? Object.keys(pluginsMap).map((pluginKey: string) => pluginsMap[pluginKey])
      : [];
  }
}
