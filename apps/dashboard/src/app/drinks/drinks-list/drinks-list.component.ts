import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from '@mdv-sixteen/core-data';

@Component({
  selector: 'mdv-sixteen-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {
  @Input() drinks: Drink[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(drink: Drink) {
    this.selected.emit(drink);
  }

  delete(drink: Drink) {
    this.deleted.emit(drink);
  }
}
