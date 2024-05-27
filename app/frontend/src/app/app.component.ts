import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from './layout/layout/layout.component';
import { PluginsLoaderService } from './services/plugins-loader.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly pluginsLoaderService = inject(PluginsLoaderService);

  ngOnInit(): void {
    this.pluginsLoaderService.loadPlugins();
  }
}
