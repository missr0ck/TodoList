import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoTitle: string ;

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.todoTitle = '';
  }

  addToList(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    this.todoService.addToList(this.todoTitle);
    this.todoTitle = '';
  }

}
