import { Component, Input } from '@angular/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

import { Plugin } from '../../../types/plugin.interface';
import { MapToContentItemPipe } from './map-to-content-item.pipe';

@Component({
  selector: 'app-plugins-panel',
  standalone: true,
  imports: [CdkDrag, CdkDropList, MapToContentItemPipe],
  templateUrl: './plugins-panel.component.html',
})
export class PluginsPanelComponent {
  @Input({ required: true }) plugins!: Plugin[];
}
