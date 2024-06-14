import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  // count: any;
  // ngOnInit(): void {
  //   // this.count = this.bookService.getCount();
  // }
  bookService = inject(BookService);
}
