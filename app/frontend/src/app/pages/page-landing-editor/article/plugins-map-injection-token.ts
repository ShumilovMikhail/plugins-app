import { InjectionToken } from '@angular/core';
import { PluginsMap as PluginsMapInterface } from './types/pluginsMap.interface';

export const PluginsMap = new InjectionToken<PluginsMapInterface>('PluginsMap');
