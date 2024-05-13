import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-page-landing-editor',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-landing-editor.component.html',
})
export class PageLandingEditorComponent implements OnInit {
  private readonly headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.pageName.set('Landing Editor');
  };
}
