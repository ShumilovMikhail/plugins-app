/*
 * Public API Surface of plugin-logo
 */

import { registerPlugin } from '@plugins/common-libraries';
import { PluginLogoComponent } from './lib/plugin-logo.component';

registerPlugin({
  slug: 'plugin-logo',
  componentType: PluginLogoComponent,
  defaultData: {
    img: '/assets/plugins-assets/logo.svg',
  },
});

export * from './lib/plugin-logo.component';
