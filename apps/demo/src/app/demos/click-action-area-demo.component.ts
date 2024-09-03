import { Component } from '@angular/core';
import { ClickActionAreaDirective } from '@tg/click-action-area';

@Component({
  selector: 'app-click-action-area-demo',
  standalone: true,
  imports: [ClickActionAreaDirective],
  template: `
    <h2>Click action area Demo</h2>

    <p>
      Trigger the click action area by moving the mouse after click less than
      5px
    </p>

    <button type="button" (tgClickActionArea)="run()" [threshold]="5">
      Click me
    </button>
  `,
  styles: [
    `
      h2,
      p {
        margin-block-end: var(--size-4);
      }
    `,
  ],
})
export class ClickActionAreaDemoComponent {
  run() {
    alert('click action area');
  }
}
