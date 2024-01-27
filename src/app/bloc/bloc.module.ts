import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import { EditblocComponent } from './editbloc/editbloc.component';
import { AddblocComponent } from './addbloc/addbloc.component';
import { BlocComponent } from './bloc/bloc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditblocComponent,
    AddblocComponent,
    BlocComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BlocComponent// Assurez-vous d'exporter app-bloc
  ]
})
export class BlocModule { }
