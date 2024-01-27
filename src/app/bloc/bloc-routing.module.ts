import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCparnomBComponent } from '../chambre/list-cparnom-b/list-cparnom-b.component';
import { AddblocComponent } from './addbloc/addbloc.component';
import { BlocComponent } from './bloc/bloc.component';
import { EditblocComponent } from './editbloc/editbloc.component';

const routes: Routes = [{path:'', component:BlocComponent},{path:'addbloc', component:AddblocComponent},{path:'editbloc/:idBloc', component:EditblocComponent}, { path:'listeChambres/:nomBloc', component: ListCparnomBComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
