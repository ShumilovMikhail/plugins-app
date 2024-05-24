import { Component, Input } from '@angular/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

import { InstalledPlugin } from '../../../types/installedPlugin.interface';
import { MapToContentItemPipe } from './map-to-content-item.pipe';
import { RefComponent } from '../article/ref/ref.component';
import { ThumbnailWrapperComponent } from './thumbnail-wrapper/thumbnail-wrapper.component';

@Component({
  selector: 'app-plugins-panel',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    MapToContentItemPipe,
    RefComponent,
    ThumbnailWrapperComponent,
  ],
  templateUrl: './plugins-panel.component.html',
})
export class PluginsPanelComponent {
  @Input({ required: true }) plugins!: InstalledPlugin[];
}
