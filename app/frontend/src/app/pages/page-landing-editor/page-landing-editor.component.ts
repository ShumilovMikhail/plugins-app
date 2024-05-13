import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderService } from '../../services/header.service';
import { PluginsService } from '../../services/plugins.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-landing-editor',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './page-landing-editor.component.html',
})
export class PageLandingEditorComponent implements OnInit {
  private readonly headerService = inject(HeaderService);
  protected readonly pluginsService = inject(PluginsService);

  ngOnInit(): void {
    this.headerService.pageName.set('Landing Editor');
  }
}
