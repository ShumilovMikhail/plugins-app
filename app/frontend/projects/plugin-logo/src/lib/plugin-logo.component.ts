import { Component } from '@angular/core';

@Component({
  selector: 'lib-plugin-logo',
  standalone: true,
  imports: [],
  template: `
    <header class="px-16 py-16">
      <img src="img" alt="logo" />
    </header>
  `,
  styles: ``,
})
export class PluginLogoComponent {
  protected readonly img = '/assets/plugins-assets/logo.svg';
}
