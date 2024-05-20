import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  Plugin,
  PluginVersion,
  PluginsService,
} from '../../services/plugins.service';
import {
  checkSvgDimensionsValidator,
  registerCallValidator,
  svgValidator,
} from '../../utils/validators';
import { PluginSvgViewComponent } from '../../shared/plugin-svg-view/plugin-svg-view.component';

@Component({
  selector: 'app-page-new-version',
  standalone: true,
  imports: [ReactiveFormsModule, PluginSvgViewComponent, CommonModule],
  templateUrl: './page-new-version.component.html',
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
export class PageNewVersionComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly pluginsService = inject(PluginsService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  protected readonly slug: string = this.route.snapshot.params['slug'];
  protected readonly plugin: Plugin | undefined = this.pluginsService.getPlugin(
    this.slug,
  );
  protected readonly pluginVersion = this.plugin?.versions.find(
    (pluginVersion: PluginVersion) =>
      pluginVersion.version === this.plugin?.latestVersion,
  );
  protected form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.pluginsService.addNewPluginVersion(this.slug, {
        svg: this.form.value.svg!,
        description: this.form.value.description!,
        script: this.form.value.script!,
        version: `${this.form.value.major}.${this.form.value.major}`,
      });
      this.router.navigateByUrl('/');
    }
  }

  private initializeForm() {
    if (this.pluginVersion) {
      const [major, minor] = this.pluginVersion?.version.split('.') as [
        string,
        string,
      ];
      this.form = this.fb.group({
        svg: new FormControl(this.pluginVersion?.svg, {
          validators: [
            Validators.required,
            svgValidator(),
            checkSvgDimensionsValidator(),
          ],
        }),
        minor: new FormControl(minor, {
          validators: [Validators.required, Validators.min(0)],
        }),
        major: new FormControl(major, {
          validators: [Validators.required, Validators.min(0)],
        }),
        description: new FormControl(this.pluginVersion?.description, {
          validators: [Validators.required, Validators.maxLength(155)],
        }),
        script: new FormControl(this.pluginVersion?.script, {
          validators: [Validators.required, registerCallValidator()],
        }),
      });
    }
  }
}
