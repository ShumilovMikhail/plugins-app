import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appPluginsHost]',
  standalone: true,
})
export class PluginsHostDirective {
  public readonly viewContainerRef = inject(ViewContainerRef);
}
