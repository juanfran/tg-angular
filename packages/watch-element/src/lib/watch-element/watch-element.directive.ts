import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input,
} from '@angular/core';
import { WatchElementService } from './watch-element.service';

@Directive({
  selector: '[tgWatchElement]',
  standalone: true,
})
export class WatchElementDirective implements OnInit, OnDestroy {
  #el = inject(ElementRef);
  #watchElementService = inject(WatchElementService);

  watchElement = input.required<string>({
    alias: 'tgWatchElement',
  });

  get nativeElement() {
    return this.#el.nativeElement as HTMLElement;
  }

  ngOnInit() {
    this.#watchElementService.add(this.watchElement(), this.nativeElement);
  }

  ngOnDestroy() {
    this.#watchElementService.remove(this.watchElement());
  }
}
