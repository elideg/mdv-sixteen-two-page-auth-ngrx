import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '@mdv-sixteen/core-data';
import { ActivatedRoute } from '@angular/router';
import { DrinksFacade } from '@mdv-sixteen/core-state';

@Component({
  selector: 'mdv-sixteen-drinks-item',
  templateUrl: './drinks-item.component.html',
  styleUrls: ['./drinks-item.component.scss']
})
export class DrinksItemComponent implements OnInit {
  drinks$: Observable<Drink>;

  constructor(
    private route: ActivatedRoute,
    private drinksFacade: DrinksFacade
  ) { }

  ngOnInit() {
    this.drinksFacade.loadDrinks();
    this.route.params.subscribe((param) => this.drinksFacade.selectDrink(param['id']));
    this.drinks$ = this.drinksFacade.selectedDrink$;
  }

}
