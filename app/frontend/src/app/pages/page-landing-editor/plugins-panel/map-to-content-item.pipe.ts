import { Pipe, PipeTransform } from '@angular/core';

import { InstalledPlugin } from '../../../types/installedPlugin.interface';
import { ContentItem } from '../../../types/contentItem.interface';

@Pipe({
  name: 'mapToContentItem',
  standalone: true,
})
export class MapToContentItemPipe implements PipeTransform {
  transform(plugin: InstalledPlugin): ContentItem {
    return {
      pluginSlug: plugin.slug,
      data: plugin.defaultData,
    };
  }
}
