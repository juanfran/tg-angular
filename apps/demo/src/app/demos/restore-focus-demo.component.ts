import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  RestoreFocusDirective,
  RestoreFocusTargetDirective,
} from '@tg/restore-focus';

@Component({
  selector: 'app-restore-focus-demo',
  standalone: true,
  imports: [
    RestoreFocusDirective,
    RestoreFocusTargetDirective,
    ReactiveFormsModule,
  ],
  template: `
    <h2>Restore focus Demo</h2>

    <button type="button" (click)="hiddenElement.set(!hiddenElement())">
      Toggle hidden element
    </button>

    <p><input type="text" tgRestoreFocusTarget="restore-focus-demo" /></p>

    @if (hiddenElement()) {
    <p
      tgRestoreFocus="restore-focus-demo"
      [tgRestoreFocusActive]="active.value"
    >
      When this element disappears the input will be focused if the checkbox is
      pressed.

      <input type="checkbox" [formControl]="active" />
    </p>
    }
  `,
  styles: [
    `
      p:not(:last-child),
      h2,
      button {
        margin-block-end: var(--size-4);
      }
    `,
  ],
})
export class RestoreFocusDemoComponent {
  hiddenElement = signal(false);

  active = new FormControl(true, { nonNullable: true });
}
