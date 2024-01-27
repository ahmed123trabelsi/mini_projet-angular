import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ResComponent } from './res/res.component';
import { AddresComponent } from './addres/addres.component';
import { EditresComponent } from './editres/editres.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ResComponent,
    AddresComponent,
    EditresComponent,
 
  ],
  imports: [
    CommonModule,
  
    ReservationRoutingModule,
    FormsModule
  ]
})
export class ReservationModule { }
