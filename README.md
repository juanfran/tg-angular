# Tg Angular Utilities

This repository contains a few Angular utilities designed to simplify common tasks in Angular applications. These utilities are standalone and can be easily integrated into any Angular project.

## Libraries Included

### 1. **Restore Focus Library**

[The Restore Focus Library](./packages/tg/restore-focus/README.md) enhances accessibility by automatically restoring focus to a specified target element when another element is destroyed. This is particularly useful for ensuring a smooth and accessible user experience, especially for keyboard and screen reader users.

### 2. **Click Action Area Directive**

[The Click Action Area Directive](./packages/tg/click-action-area/README.md) detects specific click actions within a defined movement threshold, helping to prevent unintended actions like triggering links or buttons on click. This directive can be customized by adjusting the movement threshold and specifying HTML tags to be ignored.

### 3. **Watch Element Library**

[The Watch Element Library](./packages/tg/watch-element/README.md) provides an easy way to track and interact with DOM elements across different components. It allows you to manage and observe DOM elements by their ID, offering a reactive approach to element management using Angular's dependency injection and RxJS observables.

## Installation and Usage

Each utility is standalone and can be imported individually into your Angular project. Refer to the individual library's README for detailed usage instructions.

This repository is intended to be a simple collection of useful Angular utilities.

## Demo

To test the demo, first run `pnpm install` to install the dependencies, and then run `pnpm start` to launch the application.
