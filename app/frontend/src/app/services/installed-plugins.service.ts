import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay } from 'rxjs';

import { InstalledPluginsMap } from '../types/installedPluginsMap.interface';
import { PluginLogoComponent } from 'plugin-logo';
import { PluginBannerComponent } from 'plugin-banner';
import { PluginBannerSliderComponent } from 'plugin-banner-slider';
import { PluginHeadingComponent } from 'plugin-heading';
import { PluginListOfProductsComponent } from 'plugin-list-of-products';
import { PluginContactInfoComponent } from 'plugin-contact-info';

@Injectable({ providedIn: 'root' })
export class InstalledPluginsService {
  private readonly installedPlugins = new BehaviorSubject<InstalledPluginsMap>({
    'plugin-logo': {
      slug: 'plugin-logo',
      componentType: PluginLogoComponent,
      defaultData: {
        img: '/assets/plugins-assets/logo.svg',
      },
    },
    'plugin-banner': {
      slug: 'plugin-banner',
      componentType: PluginBannerComponent,
      defaultData: {
        img: '/assets/plugins-assets/banner.png',
        text: 'Discover the World of <br> Beauty with GlitterGlow',
        color: '#FEF9C3',
      },
    },
    'plugin-banner-slider': {
      slug: 'plugin-banner-slider',
      componentType: PluginBannerSliderComponent,
      defaultData: {
        banners: [
          {
            img: '/assets/plugins-assets/banners/1.png',
            seoText: 'Catch today’s lipsticks offers',
            button: {
              color: '#FFF',
              bgColor: '#000',
              text: 'ORDER NOW',
            },
          },
          {
            img: '/assets/plugins-assets/banners/2.png',
            seoText: '3 Step Beauty Ritual',
            button: {
              color: '#FFF',
              bgColor: '#000',
              text: 'SHOP NOW',
            },
          },
          {
            img: '/assets/plugins-assets/banners/3.png',
            seoText: 'Best offers this month’s',
            button: {
              color: '#FFF',
              bgColor: '#000',
              text: 'ORDER NOW',
            },
          },
        ],
      },
    },
    'plugin-heading': {
      slug: 'plugin-heading',
      componentType: PluginHeadingComponent,
      defaultData: {
        text: 'Products',
      },
    },
    'plugin-list-of-products': {
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
    },
    'plugin-contact-info': {
      slug: 'plugin-contact-info',
      componentType: PluginContactInfoComponent,
      defaultData: {
        phone: '0825 456 858',
        email: 'makeup-shop@makeup.com',
      },
    },
  });
  public readonly installedPlugins$: Observable<InstalledPluginsMap> =
    this.installedPlugins.asObservable().pipe(delay(100));
}
