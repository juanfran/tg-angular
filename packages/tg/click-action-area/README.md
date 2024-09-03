# Click Action Area Directive

The **Click Action Area Directive** allows developers to detect specific click actions within a defined threshold of movement, preventing undesired actions like triggering links or buttons when a user clicks. This directive can customize the movement threshold and specify HTML tags that should be ignored when a click action is detected.

## Usage

### 1. Import the Directive

First, import the `ClickActionAreaDirective` in your Angular component.

```ts
import { Component, signal } from '@angular/core';
import { ClickActionAreaDirective } from '@tg/click-action-area';
```

### 2. Use the Directive in your template

Apply the `tgClickActionArea` directive to any DOM element where you want to detect specific click actions. Customize the threshold and specify any tags to exclude if needed.

```html
<div tgClickActionArea (tgClickActionArea)="handleClickAction()" [threshold]="10" [bannedTags]="['A', 'BUTTON']">Click within this area!</div>
```

### 3. Handle the Click Action in your Component

Implement the logic to handle the click action in your component by subscribing to the directive's output event.

```ts
@Component({
  selector: 'app-click-action-demo',
  standalone: true,
  imports: [ClickActionAreaDirective],
  templateUrl: './click-action-demo.component.html',
  styleUrls: ['./click-action-demo.component.css'],
})
export class ClickActionDemoComponent {
  handleClickAction() {
    console.log('Click action detected!');
  }
}
```

## API

### `ClickActionAreaDirective`

This directive enables you to detect click actions based on specific criteria such as movement threshold and tag exclusion.

- **`tgClickActionArea: EventEmitter<void>`**: The event emitted when a valid click action is detected.
- **`threshold: number`**: The maximum mouse movement (in pixels) allowed for the action to be considered a valid click. Default is `5`.
- **`bannedTags: string[]`**: An array of HTML tag names that should be ignored when detecting click actions.

## Example

Here’s a full example demonstrating how to use the `ClickActionAreaDirective` in a component:

```ts
import { Component, signal } from '@angular/core';
import { ClickActionAreaDirective } from '@tg/click-action-area';

@Component({
  selector: 'app-click-action-demo',
  standalone: true,
  imports: [ClickActionAreaDirective],
  template: ` <div tgClickActionArea (tgClickActionArea)="handleClickAction()" [threshold]="10" [bannedTags]="['A', 'BUTTON']">Click within this area!</div> `,
  styles: [
    `
      div {
        padding: 10px;
        border: 1px solid #ccc;
        margin-top: 20px;
      }
    `,
  ],
})
export class ClickActionDemoComponent {
  handleClickAction() {
    console.log('Click action detected!');
  }
}
```

This example demonstrates how to apply the `ClickActionAreaDirective` to an element and handle click actions that meet specific criteria, such as minimal mouse movement and ignoring certain HTML tags.
