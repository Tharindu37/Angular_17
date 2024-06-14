import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss',
})
export class TodoListItemComponent {
  taskTitle = 'Read cup of coffee';
  isComplete = false;
  formIsInvalid = true;
  testId = 'main-cta';
  isAdmin = false;
  ingredientList = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];

  completeTask() {
    this.isComplete = true;
  }

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }

  announcement = 'Hello again Angular!';

  transformText(event: Event) {
    console.log(event);
    this.announcement = this.announcement.toUpperCase();
  }
}
