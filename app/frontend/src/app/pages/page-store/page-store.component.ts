import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-page-store',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-store.component.html',
})
export class PageStoreComponent implements OnInit {
  private readonly headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.pageName.set('Plugins store');
  };
};
