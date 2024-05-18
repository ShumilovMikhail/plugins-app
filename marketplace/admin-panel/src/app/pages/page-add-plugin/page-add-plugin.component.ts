import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { Plugin, PluginsService } from '../../services/plugins.service';
import { PluginSvgViewComponent } from '../../shared/plugin-svg-view/plugin-svg-view.component';
import { CommonModule } from '@angular/common';
import { min } from 'rxjs';

@Component({
  selector: 'app-page-add-plugin',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    PluginSvgViewComponent,
    CommonModule,
  ],
  templateUrl: './page-add-plugin.component.html',
})
export class PageAddPluginComponent {
  private readonly pluginsService = inject(PluginsService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  protected readonly form = this.fb.group({
    svg: new FormControl('', { validators: [Validators.required] }),
    minor: new FormControl(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    major: new FormControl(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    slug: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] }),
    script: new FormControl('', { validators: [Validators.required] }),
  });
  public onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const plugin: Plugin = {
        svg: this.form.value.svg!,
        slug: this.form.value.slug!,
        description: this.form.value.description!,
        script: this.form.value.script!,
        version: `${this.form.value.major}.${this.form.value.major}`,
      };
      this.pluginsService.addNewPlugin(plugin);
      this.router.navigateByUrl('/');
    }
  }
}
