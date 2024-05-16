import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';

import { HeaderService } from '../../services/header.service';
import { PluginsService } from '../../services/plugins.service';
import { ArticleService } from '../../services/article.service';
import { ArticleComponent } from './article/article.component';
import { PluginsPanelComponent } from './plugins-panel/plugins-panel.component';
import { MapPluginsToListPipe } from './map-plugins-to-list.pipe';

@Component({
  selector: 'app-page-landing-editor',
  standalone: true,
  templateUrl: './page-landing-editor.component.html',
  // styles: [':host {display:flex; flex:1; width: 100%; height: 100%;}'],
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
  protected readonly pluginsService = inject(PluginsService);
  protected readonly articleService = inject(ArticleService);

  ngOnInit(): void {
    this.headerService.pageName.set('Landing Editor');
  }
}
