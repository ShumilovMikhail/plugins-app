import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';

import { PluginDTO } from '../types/pluginDTO.interface';

@Injectable({ providedIn: 'root' })
export class PluginsService {
  private readonly http = inject(HttpClient);
  private readonly cachedPlugins = new BehaviorSubject<PluginDTO[] | null>(null);
  public readonly plugins$: Observable<PluginDTO[] | null> = this.cachedPlugins
    .asObservable()
    .pipe(
      switchMap((cachedPlugins) => {
        if (!cachedPlugins) {
          this.http
            .get<PluginDTO[]>('/api/plugins')
            .pipe(
              tap((plugins: PluginDTO[]) => {
                this.cachedPlugins.next(plugins);
              }),
            )
            .subscribe(() => {});
        }
        return this.cachedPlugins.asObservable();
      }),
    );
  public readonly installedPlugins$: Observable<PluginDTO[]> = this.cachedPlugins
    .asObservable()
    .pipe(
      switchMap((cachedPlugins: PluginDTO[] | null) => {
        if (!cachedPlugins) {
          return this.http.get<PluginDTO[]>('/api/plugins?installed=1');
        }
        return of(
          cachedPlugins!.filter((plugin: PluginDTO): boolean => plugin.installed),
        );
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
      this.cachedPlugins.next(cachedPlugins);
    });
  }
}
