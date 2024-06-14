import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  a = 100;
  counter = signal({
    count: this.a,
  });

  constructor() {}

  setCount() {
    this.a = this.a + 1;
    // this.counter.count = this.a;
    this.counter.set({
      count: this.a,
    });
    console.log(this.counter().count);
  }

  getCount() {
    return this.counter().count;
  }
}
