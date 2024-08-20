import { Component } from '@angular/core';
import { WatchElementDemoComponent } from './watch-element-demo.component';

@Component({
  standalone: true,
  imports: [WatchElementDemoComponent],
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <app-watch-element-demo />
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
