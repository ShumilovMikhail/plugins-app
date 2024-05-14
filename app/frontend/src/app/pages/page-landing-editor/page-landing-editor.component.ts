import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderService } from '../../services/header.service';
import { PluginsService } from '../../services/plugins.service';
import { ArticleService } from '../../services/article.service';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-page-landing-editor',
  standalone: true,
  templateUrl: './page-landing-editor.component.html',
  imports: [RouterModule, CommonModule, ArticleComponent],
})
export class PageLandingEditorComponent implements OnInit {
  private readonly headerService = inject(HeaderService);
  protected readonly pluginsService = inject(PluginsService);
  protected readonly articleService = inject(ArticleService);

  ngOnInit(): void {
    this.headerService.pageName.set('Landing Editor');
  }
}
