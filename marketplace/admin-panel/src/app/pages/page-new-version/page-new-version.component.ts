import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, map, take } from 'rxjs';

import {
  Plugin,
  PluginVersion,
  PluginsService,
} from '../../services/plugins.service';
import {
  checkLatestVersionValidator,
  checkSvgDimensionsValidator,
  registerCallValidator,
  svgValidator,
} from '../../utils/validators';
import { PluginSvgViewComponent } from '../../shared/plugin-svg-view/plugin-svg-view.component';

@Component({
  selector: 'app-page-new-version',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PluginSvgViewComponent,
    CommonModule,
    RouterModule,
  ],
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
  protected readonly plugin$: Observable<Plugin | undefined> =
    this.pluginsService.getPlugin(this.slug);
  protected readonly pluginVersion$ = this.plugin$!.pipe(
    map((plugin: Plugin | undefined) => {
      return plugin
        ? plugin.versions.find(
            (pluginVersion: PluginVersion) =>
              pluginVersion.version === plugin.latestVersion,
          )
        : undefined;
    }),
  );
  protected form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();
    console.log(this.form.value);
    if (this.form.valid) {
      this.pluginsService.addNewPluginVersion(this.slug, {
        svg: this.form.value.svg!,
        description: this.form.value.description!,
        script: this.form.value.script!,
        version: `${this.form.value.version.major}.${this.form.value.version.minor}`,
      });
      this.router.navigateByUrl('/');
    }
  }

  public onDeletePlugin(): void {
    this.pluginsService.deletePlugin(this.slug);
    this.router.navigateByUrl('/');
  }

  public onDeletePluginVersion(version: string): void {
    this.pluginsService.deletePluginVersion(this.slug, version);
    this.initializeForm();
  }

  private initializeForm(): void {
    if (this.pluginVersion$) {
      this.pluginVersion$
        .pipe(take(1))
        .subscribe((pluginVersion: PluginVersion | undefined) => {
          const [major, minor] = pluginVersion?.version.split('.') as [
            string,
            string,
          ];
          this.form = this.fb.group({
            svg: new FormControl(pluginVersion?.svg, {
              validators: [
                Validators.required,
                svgValidator(),
                checkSvgDimensionsValidator(),
              ],
            }),
            version: new FormGroup(
              {
                minor: new FormControl(minor, {
                  validators: [Validators.required, Validators.min(0)],
                }),
                major: new FormControl(major, {
                  validators: [Validators.required, Validators.min(0)],
                }),
              },
              checkLatestVersionValidator(pluginVersion?.version),
            ),
            description: new FormControl(pluginVersion?.description, {
              validators: [Validators.required, Validators.maxLength(155)],
            }),
            script: new FormControl(pluginVersion?.script, {
              validators: [Validators.required, registerCallValidator()],
            }),
          });
        });
    }
  }
}
