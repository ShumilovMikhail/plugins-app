import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/page-plugins/page-plugins.component').then(
        (c) => c.PagePluginsComponent,
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./pages/page-add-plugin/page-add-plugin.component').then(
        (c) => c.PageAddPluginComponent,
      ),
  },
  {
    path: 'update/:slug',
    loadComponent: () =>
      import('./pages/page-new-version/page-new-version.component').then(
        (c) => c.PageNewVersionComponent,
      ),
  },
];
