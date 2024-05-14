import { Component, Input } from '@angular/core';

import { Plugin } from '../../../types/plugin.interface';

@Component({
  selector: 'app-plugins-panel',
  standalone: true,
  imports: [],
  templateUrl: './plugins-panel.component.html',
})
export class PluginsPanelComponent {
  @Input({ required: true }) plugins!: Plugin[];
}
