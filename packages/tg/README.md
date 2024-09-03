# Restore Focus Library for Angular

The **Restore Focus Library** is designed to enhance accessibility in Angular applications by automatically restoring focus to a specified target element when another element is destroyed. This feature is particularly useful for maintaining a smooth and accessible user experience, especially for keyboard and screen reader users.

## Usage

### 1. Import the Directives and other necessary dependencies

In your component, import the `RestoreFocusDirective`, `RestoreFocusTargetDirective`, and any other required dependencies, in this example where are going to use `ReactiveFormsModule`.

```ts
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RestoreFocusDirective, RestoreFocusTargetDirective } from '@tg/restore-focus';
```

### 2. Use the Directives in your template

Apply the `tgRestoreFocus` directive to the element that may be removed from the DOM, and `tgRestoreFocusTarget` to the element that should receive the focus when the other element is destroyed.

```html
<h2>Restore Focus Demo</h2>

<button type="button" (click)="hiddenElement.set(!hiddenElement())">Toggle hidden element</button>

<p><input type="text" tgRestoreFocusTarget="restore-focus-demo" /></p>

@if (hiddenElement()) {
<p tgRestoreFocus="restore-focus-demo" [tgRestoreFocusActive]="active.value">
  When this element disappears the input will be focused if the checkbox is pressed.

  <input type="checkbox" [formControl]="active" />
</p>
}
```

### 3. Configure the Focus Restoration in your component

You can configure the behavior of the focus restoration by binding a reactive form control or any other condition to the `tgRestoreFocusActive` input.

```ts
@Component({
  selector: 'app-restore-focus-demo',
  standalone: true,
  imports: [RestoreFocusDirective, RestoreFocusTargetDirective, ReactiveFormsModule],
  templateUrl: './restore-focus-demo.component.html',
  styleUrls: ['./restore-focus-demo.component.css'],
})
export class RestoreFocusDemoComponent {
  hiddenElement = signal(false);

  active = new FormControl(true, { nonNullable: true });
}
```

## API

### `RestoreFocusDirective`

This directive is applied to the element that may be removed from the DOM. When the element is destroyed, it triggers the focus to be restored to the specified target element.

- **`tgRestoreFocus: string`**: The ID of the target element that should receive focus when this element is destroyed.
- **`[tgRestoreFocusActive]: boolean`**: A boolean input to conditionally activate or deactivate the focus restoration. When set to `false`, the focus will not be restored.

### `RestoreFocusTargetDirective`

This directive is applied to the target element that should receive focus when the associated `tgRestoreFocus` element is destroyed.

- **`tgRestoreFocusTarget: string`**: The ID that links this element to the `tgRestoreFocus` directive.

## Example

Here’s a full example demonstrating how to use the `RestoreFocusDirective` and `RestoreFocusTargetDirective` together.

```ts
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RestoreFocusDirective, RestoreFocusTargetDirective } from '@tg/restore-focus';

@Component({
  selector: 'app-restore-focus-demo',
  standalone: true,
  imports: [RestoreFocusDirective, RestoreFocusTargetDirective, ReactiveFormsModule],
  template: `
    <h2>Restore Focus Demo</h2>

    <button type="button" (click)="hiddenElement.set(!hiddenElement())">Toggle hidden element</button>

    <p><input type="text" tgRestoreFocusTarget="restore-focus-demo" /></p>

    @if (hiddenElement()) {
    <p tgRestoreFocus="restore-focus-demo" [tgRestoreFocusActive]="active.value">
      When this element disappears the input will be focused if the checkbox is pressed.

      <input type="checkbox" [formControl]="active" />
    </p>
    }
  `,
  styles: [
    `
      p,
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
```
