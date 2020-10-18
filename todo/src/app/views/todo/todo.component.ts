import { Component, OnInit } from '@angular/core';

interface Todo {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {

  public items: Todo[] = [
    {name: 'Item 1', checked: true}, 
    {name: 'Item 2', checked: true}, 
    {name: 'Item 3', checked: true},
  ];
  public todo = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  addToDo(): void {
    this.items.push({name: this.todo, checked: true});
  }

  removeToDo(item: string): void {
    this.items.map(todo => {
      return todo.name !== item ? todo : null;
    });

    console.log(this.items);
    // this.items.splice(this.items.indexOf(item), 1);
  }

  // editToDo(): void {
  //   this.items.splice(this.items.indexOf(this.todo));
  // }
}
