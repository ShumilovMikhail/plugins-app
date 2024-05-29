import {
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map, tap } from 'rxjs';

import { PluginDTO } from '@app/types/pluginDTO.interface';
import { PluginsService } from './plugins.service';
import { MarketplacePlugin } from '@app/types/marketplacePlugin.interface';
import { Plugin } from '@app/types/plugin.interface';
import { MarketplacePluginVersion } from '@app/types/marketplacePluginVersion.interface';

const MARKETPLACE_API: string =
  'https://x8ki-letl-twmt.n7.xano.io/api:AZyFo9Vk';

@Controller('plugins')
export class PluginsController {
  constructor(
    private readonly httpService: HttpService,
    private readonly pluginsService: PluginsService,
  ) {}

  @Get()
  readPlugins(@Query('installed') installed: number): Observable<PluginDTO[]> {
    const installedPlugins: Plugin[] = this.pluginsService.readPlugins();
    return this.httpService
      .get<MarketplacePlugin[]>(`${MARKETPLACE_API}/plugins`)
      .pipe(
        map((res) => {
          const plugins: MarketplacePlugin[] = res.data;

          return plugins.map((marketplacePlugin): PluginDTO => {
            return PluginsService.mapMarketplacePluginToPluginDTO(
              marketplacePlugin,
              installedPlugins,
            );
          });
        }),
        map((plugins: PluginDTO[]) => {
          return !installed
            ? plugins
            : plugins.filter((plugin: PluginDTO) => plugin.installed);
        }),
      );
  }

  @Get(':slug')
  @Header('content-type', 'text/javascript')
  getInstalledPlugin(@Param('slug') slug: string): string {
    const foundPlugin: Plugin | null = this.pluginsService
      .readPlugins()
      .find((installedPlugin: Plugin) => installedPlugin.slug === slug);
    return foundPlugin
      ? foundPlugin.script
      : `console.log("'Plugin nit found: '${slug}")`;
  }

  @Post(':slug')
  installOrUpdatePlugin(@Param('slug') slug: string): Observable<PluginDTO> {
    return this.httpService
      .get<MarketplacePlugin | null>(`${MARKETPLACE_API}/plugins/${slug}`)
      .pipe(
        tap((res: { data: MarketplacePlugin | null }) => {
          const plugin: MarketplacePlugin | null = res.data;
          if (plugin) {
            const latestVersionObj: MarketplacePluginVersion =
              plugin.versions.find(
                (pluginVersion: MarketplacePluginVersion) =>
                  pluginVersion.version === plugin.latestVersion,
              );
            if (latestVersionObj) {
              this.pluginsService.addOrUpdatePlugin({
                slug: plugin.slug,
                ...latestVersionObj,
              });
            } else {
              throw new Error(
                `Plugin version(${plugin.latestVersion}) not found, slug: ${slug}`,
              );
            }
          } else {
            throw new Error(`Plugin not found, slug: ${slug}`);
          }
        }),
        map((res: { data: MarketplacePlugin | null }) => {
          const plugin: MarketplacePlugin | null = res.data;
          const foundInstalledPlugin = this.pluginsService
            .readPlugins()
            .find(
              (installedPlugin: Plugin) => installedPlugin.slug === plugin.slug,
            );
          return {
            ...foundInstalledPlugin,
            installed: true,
            outdated: foundInstalledPlugin.version !== plugin.latestVersion,
          };
        }),
      );
  }

  @Delete(':slug')
  uninstallPlugin(@Param('slug') slug: string): void {
    this.pluginsService.deletePlugin(slug);
  }
}
