import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay } from 'rxjs';

import { ParagraphComponent } from '../pages/page-landing-editor/article/paragraph/paragraph.component';
import { PluginsMap } from '../types/pluginsMap.interface';

@Injectable({ providedIn: 'root' })
export class PluginsService {
  private readonly plugins = new BehaviorSubject<PluginsMap>({
    paragraph: {
      slug: 'paragraph',
      componentType: ParagraphComponent,
      defaultData: {
        text: 'Default text',
        color: '#ff0000',
      },
    },
  });
  public readonly plugins$: Observable<PluginsMap> = this.plugins
    .asObservable()
    .pipe(delay(100));
}
