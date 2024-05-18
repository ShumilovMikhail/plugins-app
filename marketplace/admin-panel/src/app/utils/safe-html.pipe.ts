import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  private readonly sanitized = inject(DomSanitizer);

  transform(text: string): SafeHtml {
    return this.sanitized.bypassSecurityTrustHtml(text);
  }
}
