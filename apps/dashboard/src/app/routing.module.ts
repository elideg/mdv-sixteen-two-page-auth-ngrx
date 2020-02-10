import { DrinksComponent } from './drinks/drinks.component';
import { DrinksItemComponent } from './drinks/drinks-item/drinks-item.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { LoginComponent } from 'libs/ui-lib/src/lib/login/login.component';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { WildcardComponent } from 'libs/ui-lib/src/lib/wildcard/wildcard.component';
import { AuthGuard } from '@mdv-sixteen/core-data';

const routes: Routes = [
  { path: 'drinks', canActivate: [AuthGuard], children: [
    { path: '', component: DrinksComponent },
    { path: 'id', component: DrinksItemComponent }
  ] },
  { path: 'login', component: LoginComponent },
  { path: '404', component: WildcardComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
