import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'htmlSanitizer',
})
export class HtmlSanitizerPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);
  transform = (value: string | null | undefined): SafeHtml => {
    if (value === null || value === undefined) {
      return this.sanitizer.bypassSecurityTrustHtml('');
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  };
}
