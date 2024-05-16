import { Component } from '@angular/core';

@Component({
  selector: 'lib-plugin-heading',
  standalone: true,
  imports: [],
  template: `
    <p class="text-4xl text-center pt-4 pb-14">
      {{ text }}
    </p>
  `,
  styles: ``,
})
export class PluginHeadingComponent {
  protected readonly text = 'Products';
}
