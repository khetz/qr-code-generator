import { Directive, ElementRef, HostListener, inject, output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  clickOutside = output<void>();

  elementRef = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const hostElement = this.elementRef.nativeElement;

    if (!hostElement.contains(event.target as Node)) {
      this.clickOutside.emit();
    }
  }
}
