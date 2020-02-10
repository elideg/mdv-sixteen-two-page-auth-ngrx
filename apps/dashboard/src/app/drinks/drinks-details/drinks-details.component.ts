import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Drink } from '@mdv-sixteen/core-data';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'mdv-sixteen-drinks-details',
  templateUrl: './drinks-details.component.html',
  styleUrls: ['./drinks-details.component.scss']
})
export class DrinksDetailsComponent implements OnInit {
  originalTitle;
  currentDrink: Drink

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set drink(value) {
    if (value) this.originalTitle = value.title;
      this.currentDrink = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(drink: Drink) {
    this.saved.emit(drink);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
