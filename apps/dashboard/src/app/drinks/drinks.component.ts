import { DrinksFacade } from '@mdv-sixteen/core-state';
import { Component, OnInit } from '@angular/core';
import { Drink, DrinkService } from '@mdv-sixteen/core-data';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'mdv-sixteen-computers',
    templateUrl: './drinks.component.html',
    styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
    form: FormGroup;
    selectedDrink$: Observable<Drink> = this.drinksFacade.selectedDrink$;
    drinks$: Observable<Drink[]> = this.drinksFacade.allDrinks$;

    constructor(
        private fb: FormBuilder,
        private drinksFacade: DrinksFacade
    ) { }

    ngOnInit() {
        this.initForm();
        this.drinksFacade.loadDrinks();
        this.selectDrink({ id: null } as Drink);
    }

    selectDrink(drink: Drink) {
        this.form.patchValue(drink);
        this.drinksFacade.selectDrink(drink.id);
    }

    cancel() {
        this.selectDrink({ id: null } as Drink);
        this.form.reset();
    }

    saveDrink(formDirective: FormGroupDirective) {
        if (this.form.invalid) return;
        if (this.form.value.id) {
            this.drinksFacade.updateDrink(this.form.value);
            this.selectDrink({ id: null } as Drink);
        } else {
            this.drinksFacade.createDrink(this.form.value);
            this.selectDrink({ id: null } as Drink);
        }
    }

    deleteDrink(drink: Drink) {
        this.drinksFacade.deleteDrink(drink);
    }

    initForm() {
        this.form = this.fb.group({
            id: [''],
            title: ['', Validators.compose([Validators.required])],
            details: ['', Validators.compose([Validators.required])],
            coolLevel: [''],
            approved: ['']
        })
    }

}
