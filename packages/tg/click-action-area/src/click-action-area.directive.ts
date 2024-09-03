import {
  Directive,
  ElementRef,
  HostListener,
  input,
  output,
  inject,
} from '@angular/core';

@Directive({
  selector: '[tgClickActionArea]',
  standalone: true,
})
export class ClickActionAreaDirective {
  #elementRef = inject(ElementRef<HTMLElement>);

  clickAction = output({
    alias: 'tgClickActionArea',
  });

  // the user need to move the mouse less than `${threshold}`px to run clickAction
  threshold = input<number>(5);
  bannedTags = input<string[]>([]);

  @HostListener('mousedown', ['$event'])
  mousedown(eventMouseDown: MouseEvent) {
    if (!eventMouseDown.target) {
      return;
    }

    const target = (eventMouseDown.target as HTMLElement).tagName;
    // prevent links from opening the editor on click
    if (!this.bannedTags().includes(target)) {
      document.body.addEventListener(
        'mouseup',
        (eventMouseUp: MouseEvent) => {
          const x = Math.abs(eventMouseDown.clientX - eventMouseUp.clientX);
          const y = Math.abs(eventMouseDown.clientY - eventMouseUp.clientY);
          if (x < this.threshold() && y < this.threshold()) {
            this.clickAction.emit();
          }
        },
        { once: true }
      );
    }
  }

  get nativeElement() {
    return this.#elementRef.nativeElement;
  }
}
