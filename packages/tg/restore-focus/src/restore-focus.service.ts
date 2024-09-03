import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  map,
  of,
  take,
  timeout,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestoreFocusService {
  #previousFocus = new BehaviorSubject<Map<string, HTMLElement>>(new Map());

  add(key: string, el: HTMLElement) {
    const targetList = this.#previousFocus.value;

    targetList.set(key, el);

    this.#previousFocus.next(targetList);
  }

  delete(key: string) {
    const targetList = this.#previousFocus.value;

    targetList.delete(key);

    this.#previousFocus.next(targetList);
  }

  focusWhenAvailable(key: string) {
    this.#previousFocus
      .pipe(
        map((targetList) => {
          return targetList.get(key);
        }),
        filter((elm): elm is HTMLElement => {
          return !!elm;
        }),
        take(1),
        timeout(2000),
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((elm) => {
        if (elm) {
          requestAnimationFrame(() => {
            elm.focus();
          });
        }
      });
  }
}
