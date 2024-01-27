import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresComponent } from './addres/addres.component';
import { ResComponent } from './res/res.component';

const routes: Routes = [{path:'', component:ResComponent},
{path:'addres', component:AddresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
