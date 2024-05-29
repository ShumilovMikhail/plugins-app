import { BehaviorSubject } from 'rxjs';

import { LoadedPluginsMap } from './loadedPluginsMap.interface';
import { LoadedPlugin } from './loadedPlugin.interface';

const loadedPlugins = new BehaviorSubject<LoadedPluginsMap>({});
export const loadedPlugins$ = loadedPlugins.asObservable();

export function registerPlugin(plugin: LoadedPlugin) {
  const newLoadedPlugins = { ...loadedPlugins.getValue() };
  if (newLoadedPlugins[plugin.slug]) {
    console.error('Plugin with the same slug already exists', plugin.slug);
  } else {
    newLoadedPlugins[plugin.slug] = { ...plugin };
    loadedPlugins.next(newLoadedPlugins);
  }
}
export function removePlugin(slug: string) {
  const newLoadedPlugins = { ...loadedPlugins.getValue() };
  delete newLoadedPlugins[slug];
  loadedPlugins.next(newLoadedPlugins);
}

export function getLoadedPluginsSync(): LoadedPluginsMap {
  return loadedPlugins.getValue();
}
