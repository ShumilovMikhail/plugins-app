import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PluginsService {
  private readonly plugins = new BehaviorSubject([{}]);
  public readonly plugins$ = this.plugins.asObservable().pipe(delay(100));
}
