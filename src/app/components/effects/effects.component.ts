import {
  Component,
  computed,
  effect,
  Injector,
  OnDestroy,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.scss',
})
export class EffectsComponent implements OnInit, OnDestroy {
  count: WritableSignal<number> = signal(99);
  foo: WritableSignal<number> = signal(100);
  a: any;
  isOdd: Signal<string> = computed(() => {
    if (this.count() % 2 == 0) {
      console.log('compute');
      return 'Even';
    } else {
      console.log('compute');
      return 'Odd';
    }
  });

  constructor(private injector: Injector) {
    this.a = effect(
      () => {
        this.foo.set(20);
        console.log(this.count());
      },
      { allowSignalWrites: true, manualCleanup: true },
    );
  }
  ngOnDestroy(): void {
    this.a.destroy();
  }
  ngOnInit(): void {
    this.createEffect();
  }

  updateCount(): void {
    this.count.update((m) => m + 1);
  }

  createEffect(): void {
    effect(
      () => {
        console.log('count', this.count());
      },
      { injector: this.injector },
    );
  }

  e = effect(() => {
    console.log('count e', this.count());
  });
}
