import { Pipe, PipeTransform } from '@angular/core';
import { Plugin, PluginVersion } from '../../services/plugins.service';

@Pipe({
  name: 'findVersionPlugin',
  standalone: true,
})
export class FindVersionPluginPipe implements PipeTransform {
  transform(
    plugin: Plugin,
    version: string | null = null,
  ): PluginVersion | undefined {
    const searchingVersion = version ? version : plugin.latestVersion;
    return plugin.versions.find(
      (pluginVersion: PluginVersion) =>
        pluginVersion.version === searchingVersion,
    );
  }
}
