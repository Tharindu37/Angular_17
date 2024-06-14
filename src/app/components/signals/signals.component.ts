import {
  Component,
  computed,
  effect,
  Injector,
  Signal,
  signal,
  untracked,
  WritableSignal,
} from '@angular/core';

import _ from 'lodash';
import { Interface } from 'readline';
import { single } from 'rxjs';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  // printCount() {
  //   //Writable signals
  //   const count = signal(0);

  //   // Signals are getter functions - calling them reads their value
  //   console.log('The count is : ', count());

  //   count.set(3);

  //   console.log('The count is : ', count());

  //   count.update((value) => value + 1);

  //   console.log('The count is : ', count());

  //   //Writable signals have the type WritableSignal.
  // }

  // printCount() {
  //   //Computed signals
  //   const count: WritableSignal<number> = signal(0);
  //   const doubleCount: Signal<number> = computed(() => count() * 2);

  //   console.log('count : ', count());
  //   console.log('doubleCount : ', doubleCount());
  //   //you can safely perform computationally expensive derivations in computed signals, such as filtering arrays.

  //   // doubleCount.set(3) // Cannot directly assign values to a computed signal. because doubleCount is not a writableSignal
  // }

  // printCount() {
  //   // Computed signal dependencies are dynamic
  //   const showCount = signal(true);
  //   const count = signal(0);
  //   const conditionalCount = computed(() => {
  //     if (showCount()) {
  //       return `The count is ${count()}`;
  //     } else {
  //       return 'Nothing to see here!';
  //     }
  //   });
  //   console.log(conditionalCount());
  //   //Note that dependencies can be removed during a derivation as well as added. If you later set showCount back to false, then count will no longer be considered a dependency of conditionalCount.
  // }

  //Reading signals in OnPush componentsReading signals in OnPush components

  // constructor() {
  //   // Effects
  //   // const count = signal(0);
  //   effect(() => {
  //     // console.log(`The current count is : ${count()}`);
  //     console.log(`The current count is`);
  //   });
  //   //Effects always execute asynchronously, during the change detection process.
  // }

  // readonly count = signal(0);
  // constructor() {
  //   // Register a new effect.
  //   effect(() => {
  //     console.log(`The count is : ${this.count()}`);
  //   });
  // }

  // readonly count = signal(0);

  // private loggingEffect = effect(() => {
  //   console.log(`The count is : ${this.count()}`);
  // });

  // readonly count = signal(0);
  // constructor(private injector: Injector) {}

  // initializeLogging(): void {
  //   effect(
  //     () => {
  //       console.log(`The count is : ${this.count()}`);
  //     },
  //     { injector: this.injector },
  //   );
  // }

  // Signal equality functions
  // printCount() {
  //   const data = signal(['test'], { equal: _.isEqual });
  //   data.set(['test']);
  //   console.log(data());
  // }

  printCount() {}

  // Reading without tracking dependencies
  constructor() {
    const currentUser = signal('Tharindu');
    const counter = computed(() => currentUser() + 1);
    // effect(() => {
    //   console.log(
    //     `User set to ${currentUser()} and the counter is ${counter()}`,
    //   );
    // });

    // effect(() => {
    //   console.log(
    //     `User set to ${currentUser()} and the counter is ${untracked(counter)}`,
    //   );
    // });

    // effect(() => {
    //   // const user = currentUser();
    //   untracked(() => {
    //     // If the `loggingService` reads signals, they won't be counted as
    //     // dependencies of this effect.
    //     // this.loggingService.log(`User set to ${user}`);
    //   });
    // });

    // Effect cleanup functions

    // effect((onCleanup) => {
    //   const user = currentUser();
    //   const timer = setTimeout(() => {
    //     console.log(`1 second ago, the user became ${user}`);
    //   }, 1000);
    //   onCleanup(() => {
    //     clearTimeout(timer);
    //   });
    // });
  }
  count: WritableSignal<number> = signal(99);
  book: WritableSignal<IBook> = signal({
    Id: '1',
    Title: 'Pen',
    Price: 2000,
  });

  isEven: Signal<boolean> = computed(() => {
    if (this.count() % 2) {
      console.log('a');
      return true;
    } else {
      console.log('a');
      return false;
    }
  });
  updateCount() {
    console.log(this.isEven());
    this.count.update((m) => m + 1);
  }
}

export interface IBook {
  Id: string;
  Title: string;
  Price: number;
}
