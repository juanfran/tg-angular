import { Component } from '@angular/core';
import { WatchElementDemoComponent } from './demos/watch-element-demo.component';
import { RestoreFocusDemoComponent } from './demos/restore-focus-demo.component';
import { ClickActionAreaDemoComponent } from './demos/click-action-area-demo.component';

@Component({
  standalone: true,
  imports: [
    WatchElementDemoComponent,
    RestoreFocusDemoComponent,
    ClickActionAreaDemoComponent,
  ],
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <app-watch-element-demo />
      <app-restore-focus-demo />
      <app-click-action-area-demo />
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
