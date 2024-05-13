import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'editor',
  },
  {
    path: 'editor',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/page-landing-editor/page-landing-editor.component').then(
        (c) => c.PageLandingEditorComponent,
      ),
  },
  {
    path: 'editor/json',
    loadComponent: () =>
      import(
        './pages/page-landing-editor-json/page-landing-editor-json.component'
      ).then((c) => c.PageLandingEditorJsonComponent),
  },
  {
    path: 'store',
    loadComponent: () =>
      import('./pages/page-store/page-store.component').then(
        (c) => c.PageStoreComponent,
      ),
  },
];
