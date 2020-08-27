import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  idForTodo = 2;
  beForEditCash = '';
  filter = 'all';
  anyRemainingModel = true;
  todos: Todo[] = [
    {
      id: 1,
      title: 'Do the project for Company1',
      completed: false,
      editing: false,
    },
    {
      id: 2,
      title: 'Do the project for Company 2',
      completed: true,
      editing: false,
    }
  ];
  constructor() { }

  addToList(todoTitle: string): void {
    if (todoTitle.trim().length === 0) {
      return;
    }
    this.todos.push({
      id: this.idForTodo,
      title: todoTitle,
      completed: false,
      editing: false
    });
    this.idForTodo++;
  }



  editTodo(todo: Todo): void {
    this.beForEditCash = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beForEditCash;
    }
    this.anyRemainingModel = this.anyRemaining();

    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beForEditCash;
    todo.editing = false;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }


  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }
  atLeastOneCompleted(): boolean {

    return this.todos.filter(todo => todo.completed).length > 0;
  }
  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
  checkAllTodos(): void {
    // tslint:disable-next-line: deprecation
    this.todos.forEach(todo => todo.completed = (event.target as HTMLInputElement).checked);
    this.anyRemainingModel = this.anyRemaining();
  }
  anyRemaining(): boolean {
    return this.remaining() !== 0;
  }
  todoFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }
    return this.todos;

  }
}
