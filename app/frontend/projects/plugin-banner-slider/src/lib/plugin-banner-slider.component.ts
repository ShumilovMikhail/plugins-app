import { Component } from '@angular/core';
import { AngularBannerSlider, Banner } from 'angular-banner-slider';

@Component({
  selector: 'lib-plugin-banner-slider',
  standalone: true,
  imports: [AngularBannerSlider],
  template: `
    <angular-banner-slider
      (pressedButton)="onPressedButton($event)"
      [banners]="banners"
    ></angular-banner-slider>
  `,
  styles: ``,
})
export class PluginBannerSliderComponent {
  protected readonly banners: Banner[] = [
    {
      img: '/assets/plugins-assets/banners/1.pns',
      seoText: 'Catch today’s lipsticks offers',
      button: {
        color: '#FFF',
        bgColor: '#000',
        text: 'ORDER NOW',
      },
    },
    {
      img: '/assets/plugins-assets/banners/2.pns',
      seoText: 'Balance It All',
      button: {
        color: '#FFF',
        bgColor: '#000',
        text: 'SHOP NOW',
      },
    },
    {
      img: '/assets/plugins-assets/banners/3.pns',
      seoText: 'Best offers this month’s',
      button: {
        color: '#FFF',
        bgColor: '#000',
        text: 'ORDER NOW',
      },
    },
  ];

  public onPressedButton(index: number): void {
    alert(index);
  }
}
