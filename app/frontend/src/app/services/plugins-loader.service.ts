import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, inject } from '@angular/core';
import * as pluginsCommonLibraries from '@plugins/common-libraries';
import * as angularCore from '@angular/core';
import * as angularCompiler from '@angular/compiler';
import * as angularCommon from '@angular/common';
import * as angularBannerSlider from 'angular-banner-slider';

declare const System: any;

@Injectable({ providedIn: 'root' })
export class PluginsLoaderService {
  private readonly document = inject(DOCUMENT);
  private readonly rendererFactory = inject(RendererFactory2);
  private readonly renderer = this.rendererFactory.createRenderer(null, null);

  public loadPlugins() {
    this.loadPluginScript('plugin-heading');
    this.loadPluginScript('plugin-banner-slider');
    this.loadPluginScript('plugin-banner');
    this.loadPluginScript('plugin-contact-info');
    this.loadPluginScript('plugin-list-of-products');
    this.loadPluginScript('plugin-logo');
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
    });
  }

  private addScriptToBody(src: string, type: string): Element {
    const scriptElement: Element = this.renderer.createElement('script');
    scriptElement.setAttribute('src', src);
    scriptElement.setAttribute('type', type);
    this.renderer.appendChild(this.document.body, scriptElement);
    return scriptElement;
  }

  private loadPluginScript(slug: string) {
    return this.addScriptToBody(`/assets/${slug}.mjs`, 'systemjs-module');
  }

  private loadSystemJsScript() {
    return this.addScriptToBody('/assets/system.min.js', 'module');
  }
}
