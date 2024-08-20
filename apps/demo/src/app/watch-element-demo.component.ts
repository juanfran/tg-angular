import { Component, inject, signal } from '@angular/core';
import { WatchElementDirective, WatchElementService } from '@tg/watch-element';

@Component({
  selector: 'app-watch-element-demo',
  standalone: true,
  imports: [WatchElementDirective],
  template: `
    <button type="button" (click)="hiddenElement.set(!hiddenElement())">
      Toggle hidden element
    </button>

    @if (hiddenElement()) {
    <div class="hidden-element" tgWatchElement="watch-demo">
      Check console for element
    </div>
    }
  `,
  styles: [
    `
      .hidden-element {
        margin-block-start: var(--size-4);
      }
    `,
  ],
})
export class WatchElementDemoComponent {
  watchElementService = inject(WatchElementService);
  hiddenElement = signal(false);

  constructor() {
    this.watchElementService.watchId('watch-demo').subscribe((elm) => {
      console.log(elm);
    });
  }
}
