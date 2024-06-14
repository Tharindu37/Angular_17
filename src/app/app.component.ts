import { Component, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { Book1Component } from './components/book1/book1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angluar_17_start';

  isloadcontent = false;
  constructor() {
    // effect(() => {
    //   console.log('ok');
    // });
  }
}
