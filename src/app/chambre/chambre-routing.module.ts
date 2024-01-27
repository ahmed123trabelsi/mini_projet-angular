import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddchambreComponent } from './addchambre/addchambre.component';
import { ChambreComponent } from './chambre/chambre.component';
import { EditchambreComponent } from './editchambre/editchambre.component';


const routes: Routes = [{path:'', component:ChambreComponent},

{path:'addchambre', component:AddchambreComponent},
{path:'editchambre/:idChambre', component:EditchambreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
