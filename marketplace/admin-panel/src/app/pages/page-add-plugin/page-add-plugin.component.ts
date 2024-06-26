import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Plugin, PluginsService } from '../../services/plugins.service';
import { PluginSvgViewComponent } from '../../shared/plugin-svg-view/plugin-svg-view.component';
import {
  checkSvgDimensionsValidator,
  kebabCaseValidator,
  registerCallValidator,
  svgValidator,
  uniqueSlugValidator,
} from '../../utils/validators';

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
  animations: [
    trigger('errorAnimation', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateX(-20px)',
        }),
      ),
      transition(':enter', [animate('300ms ease-out')]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({
            opacity: 0,
            transform: 'translateX(20px)',
          }),
        ),
      ]),
    ]),
  ],
})
export class PageAddPluginComponent {
  private readonly pluginsService = inject(PluginsService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  protected readonly form = this.fb.group({
    svg: new FormControl('', {
      validators: [
        Validators.required,
        svgValidator(),
        checkSvgDimensionsValidator(),
      ],
    }),
    minor: new FormControl(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    major: new FormControl(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    slug: new FormControl('', {
      validators: [Validators.required, kebabCaseValidator()],
      asyncValidators: [uniqueSlugValidator(this.pluginsService)],
    }),
    description: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(155)],
    }),
    script: new FormControl('', {
      validators: [Validators.required, registerCallValidator()],
    }),
  });
  public onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const version = `${this.form.value.major}.${this.form.value.major}`;
      const plugin: Plugin = {
        slug: this.form.value.slug!,
        latestVersion: version,
        versions: [
          {
            svg: this.form.value.svg!,
            description: this.form.value.description!,
            script: this.form.value.script!,
            version,
          },
        ],
      };
      this.pluginsService.addNewPlugin(plugin);
      this.router.navigateByUrl('/');
    }
  }
}
