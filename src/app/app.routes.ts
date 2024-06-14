import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { SignalsComponent } from './components/signals/signals.component';
import { BookComponent } from './components/book/book.component';
import { EffectsComponent } from './components/effects/effects.component';

export const routes: Routes = [{ path: '', component: EffectsComponent }];
