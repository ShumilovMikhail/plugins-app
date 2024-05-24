import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';

import { HeaderService } from '../../services/header.service';
import { LoadedPluginsService } from '../../services/installed-plugins.service';
import { ArticleService } from '../../services/article.service';
import { ArticleComponent } from './article/article.component';
import { PluginsPanelComponent } from './plugins-panel/plugins-panel.component';
import { MapPluginsToListPipe } from './map-plugins-to-list.pipe';

@Component({
  selector: 'app-page-landing-editor',
  standalone: true,
  templateUrl: './page-landing-editor.component.html',
  styles: [':host {display:flex; height: 100%; justify-content: center;}'],
  imports: [
    RouterModule,
    CommonModule,
    ArticleComponent,
    PluginsPanelComponent,
    MapPluginsToListPipe,
    CdkDropListGroup,
  ],
})
export class PageLandingEditorComponent implements OnInit {
  private readonly headerService = inject(HeaderService);
  protected readonly LoadedPluginsService = inject(LoadedPluginsService);
  protected readonly articleService = inject(ArticleService);

  ngOnInit(): void {
    this.headerService.pageName.set('Landing Editor');
  }
}
