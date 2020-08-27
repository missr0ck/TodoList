import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { trigger, style, transition, animate } from '@angular/animations';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss'],
  animations: [trigger('fade', [
    transition(':enter', [
      style({ opacity: 0 , transform: 'translateY(30px)'}),
      animate(200, style({opacity: 1 , transform: 'translateY(0px)'}))
    ]),
    transition(':leave', [
      animate(200, style({opacity: 0 , transform: 'translateY(30px)'}))
    ]),
  ])]
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }




}
