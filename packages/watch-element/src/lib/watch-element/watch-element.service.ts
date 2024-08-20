import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

type WatchElm = Record<'string', HTMLElement>;

@Injectable({
  providedIn: 'root',
})
export class WatchElementService {
  #elements$ = new BehaviorSubject({} as WatchElm);

  add(id: string, elm: HTMLElement) {
    const newObj = {
      ...this.#elements$.value,
      [id]: elm,
    };

    this.#elements$.next(newObj);
  }

  remove(id: string) {
    const newObj: Partial<WatchElm> = {
      ...this.#elements$.value,
    };

    delete newObj[id as keyof WatchElm];

    this.#elements$.next(newObj as WatchElm);
  }

  watchId(id: string) {
    return this.#elements$.asObservable().pipe(
      map((elements) => {
        return elements[id as keyof WatchElm];
      })
    );
  }
}
