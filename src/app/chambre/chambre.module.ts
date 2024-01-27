import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { ChambreComponent } from './chambre/chambre.component';
import { AddchambreComponent } from './addchambre/addchambre.component';
import { EditchambreComponent } from './editchambre/editchambre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCparnomBComponent } from './list-cparnom-b/list-cparnom-b.component';
import { BlocModule } from '../bloc/bloc.module';
import { BlocinfoComponent } from './blocinfo/blocinfo.component';
import { FilterByNumeroChambrePipe } from './filter-by-numero-chambre.pipe';






@NgModule({
  declarations: [
    ChambreComponent,
    AddchambreComponent,
    EditchambreComponent,
    ListCparnomBComponent,
    BlocinfoComponent,
    FilterByNumeroChambrePipe,
   
 
 
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    BlocModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChambreModule { }
