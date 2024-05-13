import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly headerService = inject(HeaderService);
};
