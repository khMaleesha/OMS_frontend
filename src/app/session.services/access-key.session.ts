import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAccessTokenSession {
  private storageEvent$: Observable<Event>;
  private sessionStorageSubject: Subject<string> = new Subject<string>();
  private sessionStorageKey = 'access-token';

  constructor() {
    // Create an observable from the 'storage' event
    this.storageEvent$ = fromEvent(window, 'storage');

    // Subscribe to the 'storage' event to handle changes
    this.storageEvent$.subscribe((event: Event) => {
      const storageEvent = event as StorageEvent;
      if (storageEvent.key === this.sessionStorageKey) {
        this.sessionStorageSubject.next(storageEvent.newValue || '');
      }
    });
  }

  getSessionStorageChanges(): Observable<string> {
    // Expose the subject as an observable to listen for changes
    return this.sessionStorageSubject.asObservable();
  }

  setSessionStorageValue(value: string): void {
    // Update the session storage value
    sessionStorage.setItem(this.sessionStorageKey, value);
    // Notify subscribers about the change
    this.sessionStorageSubject.next(value);
  }
}
