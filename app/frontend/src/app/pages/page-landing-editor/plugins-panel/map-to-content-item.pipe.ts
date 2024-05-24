import { Pipe, PipeTransform } from '@angular/core';

import { LoadedPlugin } from '../../../types/loadedPlugin.interface';
import { ContentItem } from '../../../types/contentItem.interface';

@Pipe({
  name: 'mapToContentItem',
  standalone: true,
})
export class MapToContentItemPipe implements PipeTransform {
  transform(plugin: LoadedPlugin): ContentItem {
    return {
      pluginSlug: plugin.slug,
      data: plugin.defaultData,
    };
  }
}
