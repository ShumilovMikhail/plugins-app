import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, inject } from '@angular/core';

declare const System: any;

@Injectable({ providedIn: 'root' })
export class PluginsLoaderService {
  private readonly document = inject(DOCUMENT);
  private readonly rendererFactory = inject(RendererFactory2);
  private readonly renderer = this.rendererFactory.createRenderer(null, null);

  public loadPlugin() {
    this.loadSystemJsScript().addEventListener('load', () => {
      console.log([...System.entries()]);
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
