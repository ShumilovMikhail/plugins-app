/*
 * Public API Surface of plugin-heading
 */

import { registerPlugin } from '@plugins/common-libraries';
import { PluginHeadingComponent } from './lib/plugin-heading.component';

registerPlugin({
  slug: 'plugin-heading',
  componentType: PluginHeadingComponent,
  defaultData: {
    text: 'Products',
  },
});

export * from './lib/plugin-heading.component';
