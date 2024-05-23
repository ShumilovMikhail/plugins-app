import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';

export type PluginVersion = {
  svg: string;
  description: string;
  script: string;
  version: string;
};
export interface Plugin {
  slug: string;
  versions: PluginVersion[];
  latestVersion: string | null;
}

const ENDPOINT: string = 'https://x8ki-letl-twmt.n7.xano.io/api:AZyFo9Vk';

@Injectable({ providedIn: 'root' })
export class PluginsService {
  private readonly http = inject(HttpClient);
  private readonly pluginsCache = new BehaviorSubject<Plugin[] | null>(null);
  public readonly plugins$: Observable<Plugin[] | null> = this.pluginsCache
    .asObservable()
    .pipe(
      switchMap((plugins: Plugin[] | null) => {
        if (!plugins) {
          this.http
            .get<Plugin[]>(`${ENDPOINT}/plugins`)
            .pipe(tap((plugins: Plugin[]) => this.pluginsCache.next(plugins)))
            .subscribe();
        }
        return this.pluginsCache.asObservable();
      }),
    );

  public addNewPlugin(newPlugin: Plugin): void {
    this.http
      .post<Plugin>(`${ENDPOINT}/plugins`, newPlugin)
      .subscribe((plugin: Plugin) => {
        const plugins: Plugin[] | null = this.pluginsCache.getValue();
        this.pluginsCache.next([...(plugins ? plugins : []), plugin]);
      });
  }

  public addNewPluginVersion(
    slug: string,
    newPluginVersion: PluginVersion,
  ): void {
    this.http
      .put<Plugin>(`${ENDPOINT}/plugins/${slug}`, {
        slug,
        latestVersion: newPluginVersion.version,
        versions: [newPluginVersion],
      })
      .subscribe((plugin: Plugin) => {
        const cachedPlugins: Plugin[] | null = this.pluginsCache.getValue();
        if (cachedPlugins) {
          const foundPluginIndex: number = cachedPlugins.findIndex(
            (plugin: Plugin) => plugin.slug === slug,
          );
          if (foundPluginIndex === -1) return;
          cachedPlugins[foundPluginIndex] = plugin;
          this.pluginsCache.next(cachedPlugins);
        }
      });
  }

  public getPlugin(slug: string): Observable<Plugin | undefined> {
    return this.http.get<Plugin>(`${ENDPOINT}/plugins/${slug}`);
  }

  public deletePlugin(slug: string): void {
    this.http
      .delete(`${ENDPOINT}/plugins`, {
        body: {
          slug,
        },
      })
      .subscribe(() => {
        const cachedPlugins = this.pluginsCache.getValue();
        if (cachedPlugins) {
          const newPluginsList = cachedPlugins.filter(
            (plugin: Plugin) => plugin.slug !== slug,
          );
          this.pluginsCache.next(newPluginsList);
        }
      });
  }

  public deletePluginVersion(slug: string, version: string): void {
    this.http
      .delete<Plugin>(`${ENDPOINT}/plugins/version`, {
        body: {
          slug,
          version,
        },
      })
      .subscribe((plugin: Plugin) => {
        const cachedPlugins = this.pluginsCache.getValue();
        if (cachedPlugins) {
          const foundPluginIndex = cachedPlugins.findIndex(
            (plugin: Plugin) => plugin.slug === slug,
          );
          if (!foundPluginIndex) return;
          cachedPlugins[foundPluginIndex] = plugin;
          this.pluginsCache.next(cachedPlugins);
        }
      });
  }
}
