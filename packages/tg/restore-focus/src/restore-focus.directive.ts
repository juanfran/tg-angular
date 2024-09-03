import { Directive, OnDestroy, inject, input } from '@angular/core';
import { RestoreFocusService } from './restore-focus.service';

@Directive({
  selector: '[tgRestoreFocus]',
  standalone: true,
})
export class RestoreFocusDirective implements OnDestroy {
  #focusService = inject(RestoreFocusService);

  id = input.required<string>({
    alias: 'tgRestoreFocus',
  });

  active = input<boolean>(true, {
    alias: 'tgRestoreFocusActive',
  });

  ngOnDestroy(): void {
    if (this.active()) {
      this.#focusService.focusWhenAvailable(this.id());
    }
  }
}
