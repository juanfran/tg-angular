import { Component } from '@angular/core';
import { WatchElementDemoComponent } from './demos/watch-element-demo.component';
import { RestoreFocusDemoComponent } from './demos/restore-focus-demo.component';

@Component({
  standalone: true,
  imports: [WatchElementDemoComponent, RestoreFocusDemoComponent],
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <app-watch-element-demo />
      <app-restore-focus-demo />
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
