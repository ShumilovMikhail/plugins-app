import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'editor'
  },
  {
    path: 'editor',
    loadComponent: () => import('./pages/page-landing-editor/page-landing-editor.component').then(c => c.PageLandingEditorComponent),
  }
];
