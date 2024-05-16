import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafeHtmlPipe } from '@plugins/common-libraries';

@Component({
  selector: 'lib-plugin-banner',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  template: `
    <div class="relative">
      <img src="img" alt="main-banner" class="w-full" />
      <div
        class="absolute h-full w-full top-0 left-0 flex items-center justify-center text-center"
      >
        <div
          class="text-6xl text-white font-semibold"
          [ngStyle]="{ fontFamily: 'Montserrat' }"
          ]
          [innerHTML]="text | safeHtml"
          ]
        ></div>
      </div>
    </div>
  `,
  styles: ``,
})
export class PluginBannerComponent {
  protected readonly img = '/assets/plugins-assets/banner.png';
  protected readonly text = 'Discover the World of <br> Beauty with GlitterGlow';
  protected readonly color = '#FEF9C3';
}
