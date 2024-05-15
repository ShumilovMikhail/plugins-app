import { Pipe, PipeTransform } from '@angular/core';

import { Plugin } from '../../../types/plugin.interface';
import { ContentItem } from '../../../types/contentItem.interface';

@Pipe({
  name: 'mapToContentItem',
  standalone: true,
})
export class MapToContentItemPipe implements PipeTransform {
  transform(plugin: Plugin): ContentItem {
    return {
      pluginSlug: plugin.slug,
      data: plugin.defaultData,
    };
  }
}
