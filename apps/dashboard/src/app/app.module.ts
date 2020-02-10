import { UiLibModule } from '@mdv-sixteen/ui-lib';
import { RoutingModule } from './routing.module';
import { CoreStateModule } from '@mdv-sixteen/core-state';
import { CoreDataModule } from '@mdv-sixteen/core-data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@mdv-sixteen/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinksListComponent } from './drinks/drinks-list/drinks-list.component';
import { DrinksDetailsComponent } from './drinks/drinks-details/drinks-details.component';
import { DrinksItemComponent } from './drinks/drinks-item/drinks-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DrinksComponent, DrinksListComponent, DrinksDetailsComponent, DrinksItemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    HttpClientModule,
    UiLibModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
