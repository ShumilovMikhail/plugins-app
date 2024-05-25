import { Injectable } from '@nestjs/common';
import { existsSync, readFileSync, writeFileSync } from 'fs';

import { Plugin } from '@app/types/plugin.interface';
import { MarketplacePlugin } from '@app/types/marketplacePlugin.interface';
import { PluginDTO } from '@app/types/pluginDTO.interface';
import { MarketplacePluginVersion } from '@app/types/marketplacePluginVersion.interface';

const PLUGINS_PATH: string = 'installed-plugins.json';

@Injectable()
export class PluginsService {
  constructor() {
    if (!existsSync(PLUGINS_PATH)) {
      writeFileSync(PLUGINS_PATH, '[]');
    }
  }

  static mapMarketplacePluginToPluginDTO(
    plugin: MarketplacePlugin,
    installedPlugins: Plugin[],
  ): PluginDTO {
    const foundInstalledPlugin = installedPlugins.find(
      (installedPlugin: Plugin) => installedPlugin.slug === plugin.slug,
    );
    const latestVersion = plugin.versions.find(
      (pluginVersion: MarketplacePluginVersion) =>
        pluginVersion.version === plugin.latestVersion,
    );

    let pluginDTO: PluginDTO = {
      slug: plugin.slug,
      svg: '',
      version: '',
      description: '',

      outdated: false,
      installed: false,
    };

    if (foundInstalledPlugin) {
      pluginDTO = {
        slug: foundInstalledPlugin.slug,
        svg: foundInstalledPlugin.svg,
        version: foundInstalledPlugin.version,
        description: foundInstalledPlugin.description,
        installed: true,
        outdated: foundInstalledPlugin.version !== plugin.latestVersion,
      };
    } else if (latestVersion) {
      pluginDTO = {
        ...pluginDTO,
        svg: latestVersion.svg,
        version: latestVersion.version,
        description: latestVersion.description,
      };
    }

    return pluginDTO;
  }

  public readPlugins(): Plugin[] {
    return JSON.parse(readFileSync(PLUGINS_PATH, 'utf-8'));
  }

  public writePlugins(plugins: Plugin[]): void {
    writeFileSync(PLUGINS_PATH, JSON.stringify(plugins, null, 2));
  }

  public addOrUpdatePlugin(plugin: Plugin): void {
    const pluginsInstalled: Plugin[] = this.readPlugins();
    const foundPluginIndex = pluginsInstalled.findIndex(
      (pluginInstalled: Plugin) => pluginInstalled.slug === plugin.slug,
    );
    if (foundPluginIndex > -1) {
      const newPlugins = [
        ...pluginsInstalled.slice(0, foundPluginIndex),
        plugin,
        ...pluginsInstalled.slice(foundPluginIndex + 1),
      ];
      this.writePlugins(newPlugins);
    } else {
      pluginsInstalled.push(plugin);
      this.writePlugins(pluginsInstalled);
    }
  }

  public deletePlugin(slug: string) {
    const pluginsInstalled: Plugin[] = this.readPlugins();
    const newPlugins = pluginsInstalled.filter(
      (installedPlugin: Plugin) => installedPlugin.slug !== slug,
    );
    this.writePlugins(newPlugins);
  }
}
