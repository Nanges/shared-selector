import { Attribute, Directive, ElementRef, HostListener, Optional, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appMakeInteractive]:not(button):not(a)',
})
export class MakeInteractiveDirective {
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2, @Optional() @Attribute('tabindex') tabindex?: number) {
        // make element focusable
        if (tabindex === null) {
            renderer.setAttribute(elementRef.nativeElement, 'tabindex', '0');
        }
    }

    // act like button on keyboard event
    @HostListener('keyup', ['$event'])
    keyup(e: KeyboardEvent) {
        if (e.code === 'Enter' || e.code === 'Space') {
            (e.target as HTMLElement).click();
        }
    }
}
