import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  modulename = 'customer';

  changemodule(event: any) {
    this.modulename = event.target.value;
  }

  supplierlist = signal([]);

  customerlist = signal([
    { id: 1, name: 'ramesh', country: 'Sri Lanka' },
    { id: 2, name: 'tharindu', country: 'India' },
    { id: 3, name: 'sahan', country: 'Singapore' },
    { id: 4, name: 'lahiru', country: 'USA' },
  ]);

  userlist = signal([
    { id: 1, name: 'ramesh', country: 'Sri Lanka' },
    { id: 2, name: 'tharindu', country: 'India' },
    { id: 3, name: 'sahan', country: 'Singapore' },
    { id: 4, name: 'lahiru', country: 'USA' },
  ]);
}
