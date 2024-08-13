import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../todos.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: any;
  currentTodo: any = null;

  constructor(private todosService: TodosService) {
    this.getTodos();
  }

  createTodoItem(todo: any) {
    console.log(todo);
    this.todosService.createTodoItem(todo).subscribe(() => {
      console.log("todo item created");
    });
  }

  updateCurrentTodo(todo: any) {
    console.log(todo);
    this.currentTodo = todo;
  }

  updateTodoItem(todo: any) {
    this.todosService.updateTodoItem(todo).subscribe(() => {
      console.log("todo item updated");
    });
  }

  getTodos() {
    this.todosService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todos = todos;
    });
  }

  deleteTodoItem(key: any) {
    this.todosService.deleteItem(key).subscribe(() => {
      console.log("todo item deleted");
      this.getTodos();
    });
  }
}
