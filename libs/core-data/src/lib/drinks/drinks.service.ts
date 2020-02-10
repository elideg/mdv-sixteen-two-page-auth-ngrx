import { Drink } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://db-30x30.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
model = 'drinks'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(drink: Drink) {
    return this.httpClient.post(this.getUrl(), drink);
  }

  delete(drink: Drink) {
    return this.httpClient.delete(this.getUrlForId(drink.id));
  }

  update(drink: Drink) {
    return this.httpClient.put(this.getUrlForId(drink.id), drink);
  }
}
