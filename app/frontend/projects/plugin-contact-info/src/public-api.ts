/*
 * Public API Surface of plugin-contact-info
 */

import { registerPlugin } from '@plugins/common-libraries';
import { PluginContactInfoComponent } from './lib/plugin-contact-info.component';

registerPlugin({
  slug: 'plugin-contact-info',
  componentType: PluginContactInfoComponent,
  defaultData: {
    phone: '0825 456 858',
    email: 'makeup-shop@makeup.com',
  },
});

export * from './lib/plugin-contact-info.component';
