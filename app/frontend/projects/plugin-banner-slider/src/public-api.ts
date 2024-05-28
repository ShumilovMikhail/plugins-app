/*
 * Public API Surface of plugin-banner-slider
 */

import { registerPlugin } from '@plugins/common-libraries';
import { PluginBannerSliderComponent } from './lib/plugin-banner-slider.component';

registerPlugin({
  slug: 'plugin-banner-slider',
  componentType: PluginBannerSliderComponent,
  defaultData: {
    banners: [
      {
        img: '/assets/plugins-assets/banners/2.webp',
        seoText: '3 Step Beauty Ritual',
        button: {
          color: '#FFF',
          bgColor: '#000',
          text: 'SHOP NOW',
        },
      },
      {
        img: '/assets/plugins-assets/banners/3.webp',
        seoText: 'Best offers this month’s',
        button: {
          color: '#FFF',
          bgColor: '#000',
          text: 'ORDER NOW',
        },
      },
    ],
  },
});

export * from './lib/plugin-banner-slider.component';
