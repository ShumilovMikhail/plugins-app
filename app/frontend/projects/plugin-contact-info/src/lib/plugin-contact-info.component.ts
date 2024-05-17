import { Component, Input } from '@angular/core';

interface PluginContactInfoData {
  phone: string;
  email: string;
}

@Component({
  selector: 'lib-plugin-contact-info',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full px-11 py-16">
      <div class="bg-yellow-50 flex flex-col justify-between py-8 px-28">
        <span class="text-4xl font-semibold text-orange-950 self-center">Contact Us</span>
        <div class="text-cyan-950 text-xl flex flex-col mt-8 font-mono">
          <span>Phone: {{ data.phone }}</span>
          <span>Email: {{ data.email }}</span>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class PluginContactInfoComponent {
  @Input({ required: true }) data!: PluginContactInfoData;
}
