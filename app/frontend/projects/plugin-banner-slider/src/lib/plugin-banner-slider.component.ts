import { Component, Input } from '@angular/core';
import { AngularBannerSlider, Banner } from 'angular-banner-slider';

interface PluginBannerSliderData {
  banners: Banner[];
}

@Component({
  selector: 'lib-plugin-banner-slider',
  standalone: true,
  imports: [AngularBannerSlider],
  template: `
    <angular-banner-slider
      (pressedButton)="onPressedButton($event)"
      [banners]="data.banners"
    ></angular-banner-slider>
  `,
  styles: ``,
})
export class PluginBannerSliderComponent {
  @Input({ required: true }) data!: PluginBannerSliderData;

  public onPressedButton(index: number): void {
    alert(index);
  }
}
