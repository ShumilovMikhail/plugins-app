import { Component, Input } from '@angular/core';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';

@Component({
  selector: 'app-plugin-svg-view',
  standalone: true,
  imports: [SafeHtmlPipe],
  template: `
    <div
      class="h-full w-full rounded-xl overflow-hidden bg-[#F9FBFD]"
      [innerHTML]="svg | safeHtml"
    ></div>
  `,
  styles: [':host {display: block}'],
})
export class PluginSvgViewComponent {
  @Input({ required: true }) svg!: string;
}
