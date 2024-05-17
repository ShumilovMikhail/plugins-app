import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { SafeHtmlPipe } from '@plugins/common-libraries';

interface PluginBannerData {
  img: string;
  text: string;
  color: string;
}

@Component({
  selector: 'lib-plugin-banner',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  template: `
    <div class="relative">
      <img [src]="data.img" alt="main-banner" class="w-full" />
      <div
        class="absolute h-full w-full top-0 left-0 flex items-center justify-center text-center"
      >
        <div
          class="text-6xl text-white font-semibold"
          [ngStyle]="{ fontFamily: 'Montserrat', color: data.color }"
          [innerHTML]="data.text | safeHtml"
        ></div>
      </div>
    </div>
  `,
  styles: ``,
})
export class PluginBannerComponent {
  @Input({ required: true }) data!: PluginBannerData;
}
