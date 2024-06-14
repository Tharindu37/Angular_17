import { Component, inject } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book1',
  standalone: true,
  imports: [],
  templateUrl: './book1.component.html',
  styleUrl: './book1.component.scss',
})
export class Book1Component {
  bookService = inject(BookService);

  setCount() {
    this.bookService.setCount();
  }
}
