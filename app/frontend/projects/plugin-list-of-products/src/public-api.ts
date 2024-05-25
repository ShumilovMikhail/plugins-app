/*
 * Public API Surface of plugin-list-of-products
 */

import { registerPlugin } from '@plugins/common-libraries';
import { PluginListOfProductsComponent } from './lib/plugin-list-of-products.component';

registerPlugin({
  slug: 'plugin-list-of-products',
  componentType: PluginListOfProductsComponent,
  defaultData: {
    products: [
      {
        img: '/assets/plugins-assets/products/image-2.png',
        name: 'Lipstick',
        price: '19',
      },
      {
        img: '/assets/plugins-assets/products/image-3.png',
        name: 'Glow Foundation',
        price: '44',
      },
      {
        img: '/assets/plugins-assets/products/image-4.png',
        name: 'Cream concealer',
        price: '67',
      },
      {
        img: '/assets/plugins-assets/products/image-5.png',
        name: 'Eyeshadow Pencil + Primer',
        price: '19',
      },
      {
        img: '/assets/plugins-assets/products/image-6.png',
        name: 'CC+ Cream',
        price: '45',
      },
      {
        img: '/assets/plugins-assets/products/image-7.png',
        name: 'Anti-aging cream',
        price: '55',
      },
      {
        img: '/assets/plugins-assets/products/image-8.png',
        name: 'Сleanser',
        price: '33',
      },
      {
        img: '/assets/plugins-assets/products/image-9.png',
        name: 'Brush Set, Including Cosmetic Bag',
        price: '33',
      },
      {
        img: '/assets/plugins-assets/products/image-10.png',
        name: 'Foundation',
        price: '45',
      },
      {
        img: '/assets/plugins-assets/products/image-11.png',
        name: 'MAKE-UP-SET',
        price: '43',
      },
    ],
  },
});

export * from './lib/plugin-list-of-products.component';
