import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, inject } from '@angular/core';
import * as angularCore from '@angular/core';
import * as angularCompiler from '@angular/compiler';
import * as angularCommon from '@angular/common';

import * as angularBannerSlider from 'angular-banner-slider';
import { PluginsService } from './plugins.service';
import { PluginDTO } from '../types/pluginDTO.interface';
import { LoadedPluginsService } from './loaded-plugins.service';
import * as pluginsCommonLibraries from '@plugins/common-libraries';
import { removePlugin } from '@plugins/common-libraries';

declare const System: any;

@Injectable({ providedIn: 'root' })
export class PluginsLoaderService {
  private readonly document = inject(DOCUMENT);
  private readonly pluginsService = inject(PluginsService);
  private readonly loadedPluginsService = inject(LoadedPluginsService);
  private readonly rendererFactory = inject(RendererFactory2);
  private readonly renderer = this.rendererFactory.createRenderer(null, null);

  public loadPlugins() {
    this.loadSystemJsScript().addEventListener('load', () => {
      System.addImportMap({
        imports: {
          '@plugins-common-libraries': 'app:@plugins-common-libraries',
          '@angular/core': 'app:@angular/core',
          '@angular/compiler': 'app:@angular/compiler',
          '@angular/common': 'app:@angular/common',
          'angular-banner-slider': 'app:angular-banner-slider',
        },
      });
      System.set('app:@plugins-common-libraries', pluginsCommonLibraries);
      System.set('app:@angular/core', angularCore);
      System.set('app:@angular/compiler', angularCompiler);
      System.set('app:@angular/common', angularCommon);
      System.set('app:angular-banner-slider', angularBannerSlider);

      this.pluginsService.installedPlugins$.subscribe((plugins: PluginDTO[]) => {
        const installedSlugs = plugins.map((plugin) => plugin.slug);
        const loadedPluginsMap = this.loadedPluginsService.getLoadedPluginsSync();
        const loadedSlugs = Object.keys(loadedPluginsMap);

        installedSlugs.forEach((installedSlug) => {
          if (!loadedPluginsMap[installedSlug]) {
            System.import(`/assets/${installedSlug}.mjs`);
          }
        });
        loadedSlugs.forEach((loadedSlug) => {
          if (!installedSlugs.includes(loadedSlug)) {
            System.delete(System.resolve(`/assets/${loadedSlug}.mjs`));
            removePlugin(loadedSlug);
          }
        });
      });
    });
  }

  private addScriptToBody(src: string, type: string): Element {
    const scriptElement: Element = this.renderer.createElement('script');
    scriptElement.setAttribute('src', src);
    scriptElement.setAttribute('type', type);
    this.renderer.appendChild(this.document.body, scriptElement);
    return scriptElement;
  }

  private loadSystemJsScript() {
    return this.addScriptToBody('/assets/system.min.js', 'module');
  }
}
