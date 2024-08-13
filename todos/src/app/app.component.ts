import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos: any;
  title = 'todos';
  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data) => {
      this.todos = data;
    })
  }
}
