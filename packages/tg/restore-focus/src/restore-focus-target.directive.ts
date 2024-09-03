import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input,
} from '@angular/core';

import { RestoreFocusService } from './restore-focus.service';

@Directive({
  selector: '[tgRestoreFocusTarget]',
  standalone: true,
})
export class RestoreFocusTargetDirective implements OnInit, OnDestroy {
  #focusService = inject(RestoreFocusService);
  #el = inject(ElementRef<HTMLElement>);

  id = input.required<string>({
    alias: 'tgRestoreFocusTarget',
  });

  ngOnInit(): void {
    this.#focusService.add(this.id(), this.#el.nativeElement);
  }

  ngOnDestroy(): void {
    this.#focusService.delete(this.id());
  }
}
