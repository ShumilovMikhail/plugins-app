import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly headerService = inject(HeaderService);
};
