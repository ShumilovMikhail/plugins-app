import { Component, Input } from '@angular/core';

interface PluginLogoData {
  img: string;
}

@Component({
  selector: 'lib-plugin-logo',
  standalone: true,
  imports: [],
  template: `
    <header class="px-16 py-16">
      <img [src]="data.img" alt="logo" />
    </header>
  `,
  styles: ``,
})
export class PluginLogoComponent {
  @Input({ required: true }) data!: PluginLogoData;
}
