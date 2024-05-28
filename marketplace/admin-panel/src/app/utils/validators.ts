import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable, catchError, map, of, take } from 'rxjs';

import { Plugin, PluginsService } from '../services/plugins.service';

export function uniqueSlugValidator(
  pluginsService: PluginsService,
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return pluginsService.plugins$.pipe(
      take(1),
      map((plugins: Plugin[] | null) => {
        const isNotUnique = plugins?.some(
          (plugin) => plugin.slug === control.value,
        );
        return isNotUnique ? { notUnique: true } : null;
      }),
      catchError(() => of(null)),
    );
  };
}

export function kebabCaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const kebabCaseRegex: RegExp = /^[a-z]+(-[a-z0-9]+)*$/;
    if (!control.value) return null;
    const isValid = kebabCaseRegex.test(control.value);
    return isValid ? null : { kebab: true };
  };
}

export function registerCallValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const registerCallRegex = /registerPlugin\(/;
    if (!control.value) return null;
    const isValid = registerCallRegex.test(control.value);
    return isValid ? null : { registerCall: true };
  };
}

export function svgValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    const isValidSvg =
      control.value.startsWith('<svg ') && control.value.endsWith('</svg>');
    return isValidSvg ? null : { svgInvalid: true };
  };
}

export function checkSvgDimensionsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    const heightRegex = / height="\d+/;
    const widthRegex = / width="\d+/;

    const hasInvalidHeight = heightRegex.test(control.value);
    const hasInvalidWidth = widthRegex.test(control.value);
    return hasInvalidHeight || hasInvalidWidth
      ? { svgDimensionsPresent: true }
      : null;
  };
}

export function checkLatestVersionValidator(
  latestVersion: string | undefined,
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value || !latestVersion) return null;
    if (control.parent && latestVersion) {
      const majorControl = control.get('major');
      const minorControl = control.get('minor');
      const versionFloat: number = parseFloat(
        `${majorControl?.value}.${minorControl?.value}`,
      );
      const latestVersionFloat = parseFloat(latestVersion);
      return versionFloat > latestVersionFloat
        ? null
        : { notLatestVersion: true };
    }
    return null;
  };
}
