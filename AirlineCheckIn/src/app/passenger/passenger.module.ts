import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';



@NgModule({
  declarations: [PassengerDetailsComponent, PassengerListComponent],
  imports: [
    CommonModule
  ]
})
export class PassengerModule { }
