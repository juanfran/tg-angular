# Watch Element Library for Angular

The **Watch Element Library** provides a simple way to track and interact with DOM elements in Angular applications without requiring the elements to be in the same component or using `ViewChild`. This library includes a service and a directive that work together to provide a straightforward API for managing and observing DOM elements by ID.

## Features

- **Track DOM Elements by ID**: Easily track any DOM element in your application using a unique ID.
- **Reactive Element Management**: Add, remove, and watch elements reactively using Angular's dependency injection and RxJS observables.
- **Standalone Directive**: The directive is standalone, making it easy to import and use in any Angular component.

## Usage

### 1. Import the Directive and Service

In your component, import the `WatchElementDirective` and `WatchElementService`.

```ts
import { Component, inject, signal } from '@angular/core';
import { WatchElementDirective, WatchElementService } from '@tg/watch-element';
```

### 2. Use the Directive in Your Template

Apply the `tgWatchElement` directive to the DOM element you want to track. Assign a unique ID to the directive.

```html
<button type="button" (click)="hiddenElement.set(!hiddenElement())">Toggle hidden element</button>

@if (hiddenElement()) {
<div class="hidden-element" tgWatchElement="watch-demo">Check console for element</div>
}
```

### 3. Watch the Element in Your Component

Subscribe to the element using the `WatchElementService` by the ID you assigned in the directive.

```ts
@Component({
  selector: 'app-watch-element-demo',
  standalone: true,
  imports: [WatchElementDirective],
  templateUrl: './watch-element-demo.component.html',
  styleUrls: ['./watch-element-demo.component.css'],
})
export class WatchElementDemoComponent {
  watchElementService = inject(WatchElementService);
  hiddenElement = signal(false);

  constructor() {
    this.watchElementService.watchId('watch-demo').subscribe((elm) => {
      console.log(elm); // Logs the tracked element when it becomes available
    });
  }
}
```

## API

### `WatchElementService`

This service provides methods to add, remove, and watch DOM elements.

- **`add(id: string, elm: HTMLElement)`**: Adds an element to be tracked with the specified ID.
- **`remove(id: string)`**: Removes the tracked element with the specified ID.
- **`watchId(id: string): Observable<HTMLElement | undefined>`**: Returns an observable that emits the tracked element whenever it is added or removed.

### `WatchElementDirective`

This directive allows you to track an element by applying it to a DOM element and providing a unique ID.

- **`tgWatchElement: string`**: The ID used to track the element.

## Example

Here’s a full example demonstrating how to use the `WatchElementService` and `WatchElementDirective` together.

```ts
import { Component, inject, signal } from '@angular/core';
import { WatchElementDirective, WatchElementService } from '@tg/watch-element';

@Component({
  selector: 'app-watch-element-demo',
  standalone: true,
  imports: [WatchElementDirective],
  template: `
    <button type="button" (click)="hiddenElement.set(!hiddenElement())">Toggle hidden element</button>

    @if (hiddenElement()) {
    <div class="hidden-element" tgWatchElement="watch-demo">Check console for element</div>
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
```
