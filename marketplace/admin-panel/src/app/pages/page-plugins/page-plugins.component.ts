import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { Plugin, PluginsService } from '../../services/plugins.service';
import { PluginSvgViewComponent } from '../../shared/plugin-svg-view/plugin-svg-view.component';
import { FindVersionPluginPipe } from '../../shared/pipes/find-version-plugin.pipe';

@Component({
  selector: 'app-page-plugins',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PluginSvgViewComponent,
    FindVersionPluginPipe,
  ],
  templateUrl: './page-plugins.component.html',
})
export class PagePluginsComponent {
  private readonly pluginsService = inject(PluginsService);
  protected readonly plugins$: Observable<Plugin[] | null> =
    this.pluginsService.plugins$;
}
