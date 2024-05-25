import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

import { PluginDTO } from '../types/pluginDTO.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PluginsService {
  private readonly http = inject(HttpClient);
  private readonly cachedPlugins = new BehaviorSubject<PluginDTO[] | null>(null);
  public readonly plugins$: Observable<PluginDTO[] | null> = this.cachedPlugins
    .asObservable()
    .pipe(
      switchMap((cachedPlugins) => {
        if (!cachedPlugins) {
          console.log(cachedPlugins);
          this.http
            .get<PluginDTO[]>('/api/plugins')
            .pipe(
              tap((plugins: PluginDTO[]) => {
                console.log(plugins);
                this.cachedPlugins.next(plugins);
              }),
            )
            .subscribe(() => {});
        }
        return this.cachedPlugins.asObservable();
      }),
    );

  public installPlugin(slug: string): void {
    this.http
      .post<PluginDTO>(`/api/plugins/${slug}`, {})
      .subscribe((plugin: PluginDTO) => {
        const cachedPlugins = this.cachedPlugins.getValue();
        if (!cachedPlugins) return;
        const foundPluginIndex = cachedPlugins.findIndex(
          (plugin: PluginDTO) => plugin.slug === slug,
        );
        if (foundPluginIndex === -1) return;
        this.cachedPlugins.next([
          ...cachedPlugins.slice(0, foundPluginIndex),
          plugin,
          ...cachedPlugins.slice(foundPluginIndex + 1),
        ]);
      });
  }

  public updatePlugin(slug: string): void {
    this.installPlugin(slug);
  }

  public uninstallPlugin(slug: string): void {
    this.http.delete<void>(`/api/plugins/${slug}`).subscribe(() => {
      const cachedPlugins = this.cachedPlugins.getValue();
      if (!cachedPlugins) return;
      const foundPluginIndex = cachedPlugins.findIndex(
        (plugin: PluginDTO) => plugin.slug === slug,
      );
      cachedPlugins[foundPluginIndex].installed = false;
    });
  }
}
