import { Component, Input } from '@angular/core';

interface PluginHeadingData {
  text: string;
}

@Component({
  selector: 'lib-plugin-heading',
  standalone: true,
  imports: [],
  template: `
    <p class="text-4xl text-center pt-4 pb-14">
      {{ data.text }}
    </p>
  `,
  styles: ``,
})
export class PluginHeadingComponent {
  @Input({ required: true }) data!: PluginHeadingData;
}
