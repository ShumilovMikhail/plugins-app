import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

import { LoadedPluginsMap } from '@plugins/common-libraries';
import { loadedPlugins$ } from '@plugins/common-libraries';

@Injectable({ providedIn: 'root' })
export class LoadedPluginsService {
  public readonly LoadedPlugins$: Observable<LoadedPluginsMap> = loadedPlugins$.pipe(
    delay(100),
  );
}
