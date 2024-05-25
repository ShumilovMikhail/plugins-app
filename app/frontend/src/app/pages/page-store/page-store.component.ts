import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Observable, combineLatestWith, map } from 'rxjs';

import { HeaderService } from '../../services/header.service';
import { PluginSvgViewComponent } from '../../shared/plugin-svg-view/plugin-svg-view.component';
import { PluginsService } from '../../services/plugins.service';
import { PluginDTO } from '../../types/pluginDTO.interface';

@Component({
  selector: 'app-page-store',
  standalone: true,
  imports: [RouterModule, CommonModule, PluginSvgViewComponent],
  templateUrl: './page-store.component.html',
})
export class PageStoreComponent implements OnInit {
  private readonly headerService = inject(HeaderService);
  private readonly filterInstalled = new BehaviorSubject<boolean>(false);
  private readonly pluginsService = inject(PluginsService);
  protected readonly filterInstalled$: Observable<boolean> =
    this.filterInstalled.asObservable();
  protected readonly plugins$: Observable<PluginDTO[]> = this.filterInstalled$.pipe(
    combineLatestWith(this.pluginsService.plugins),
    map(([installed, plugins]: [boolean, PluginDTO[]]) => {
      return installed
        ? plugins.filter((plugin: PluginDTO) => plugin.installed)
        : plugins;
    }),
  );

  ngOnInit(): void {
    this.headerService.pageName.set('Plugins store');
  }

  public onSetInstalled(installed: boolean): void {
    this.filterInstalled.next(installed);
  }

  public onInstallPlugin(slug: string): void {
    console.log(1);
    this.pluginsService.installPlugin(slug);
  }

  public onUpdatePlugin(slug: string): void {
    this.pluginsService.updatePlugin(slug);
  }

  public onUninstallPlugin(slug: string): void {
    this.pluginsService.uninstallPlugin(slug);
  }
}
