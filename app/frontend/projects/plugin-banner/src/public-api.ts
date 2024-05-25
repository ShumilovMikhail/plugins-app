/*
 * Public API Surface of plugin-banner
 */
import { registerPlugin } from '@plugins/common-libraries';
import { PluginBannerComponent } from './lib/plugin-banner.component';

registerPlugin({
  slug: 'plugin-banner',
  componentType: PluginBannerComponent,
  defaultData: {
    img: '/assets/plugins-assets/banner.png',
    text: 'Discover the World of <br> Beauty with GlitterGlow',
    color: '#FEF9C3',
  },
});

export * from './lib/plugin-banner.component';
