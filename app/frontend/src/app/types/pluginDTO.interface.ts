import { Plugin } from './plugin.interface';

export interface PluginDTO extends Plugin {
  installed: boolean;
  outdated: boolean;
}
