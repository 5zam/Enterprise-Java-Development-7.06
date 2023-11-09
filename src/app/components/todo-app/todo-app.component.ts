import { Component } from '@angular/core';
import { Todo } from 'src/app/models/list.todo.model';


@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {
  
  newTodoTitle: string = '';
  todos: Todo[] = [];
  postponedTodos: Todo[] = [];

  addTodo(): void {
    if (this.newTodoTitle.trim().length) {
      const newTodo = new Todo(Date.now(), this.newTodoTitle, false);
      // Only add if the todo does not already exist
      if (!this.todos.some(todo => todo.title === newTodo.title)) {
        this.todos.push(newTodo);
        this.newTodoTitle = '';
      }
    }
  }



  toggleComplete(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  }
  

  postponeTodo(todo: Todo): void {
    this.postponedTodos.push(todo);
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  restorePostponed(): void {
    this.todos = [...this.todos, ...this.postponedTodos];
    this.postponedTodos = [];
  }

  //edit , clear all taskes 

  editTodo(todo: Todo): void {
    todo.editing = true;
    this.todos = [...this.todos];
  }
  
  updateTodoTitle(todo: Todo, newTitle: string): void {
    if (newTitle.trim()) {
      todo.title = newTitle.trim();
      todo.editing = false;
      this.todos = [...this.todos];
    }
  }
  
  cancelEditing(todo: Todo): void {
    todo.editing = false;
    this.todos = [...this.todos];
  }


  clearAll(): void {
    this.todos = [];
    this.postponedTodos = [];
  }
  


markAsComplete(todo: Todo): void {
  // Here you would update the 'completed' property of the todo item
  const index = this.todos.indexOf(todo);
  if (index !== -1) {
    this.todos[index].completed = true;
  }
}

}