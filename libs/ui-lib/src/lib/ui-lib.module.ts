// tslint:disable-next-line: nx-enforce-module-boundaries
import { RoutingModule } from './../../../../apps/dashboard/src/app/routing.module';
import { MaterialModule } from '@mdv-sixteen/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToolbarComponent, LoginComponent, WildcardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  exports: [ToolbarComponent, LoginComponent, WildcardComponent]
})
export class UiLibModule {}
