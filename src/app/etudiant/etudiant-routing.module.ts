import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddetudiantComponent } from './addetudiant/addetudiant.component';
import { EditetudiantComponent } from './editetudiant/editetudiant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [{path:'', component:EtudiantComponent},{path:'addetudiant', component:AddetudiantComponent},{path:'editetudiant/:idEtudiant', component:EditetudiantComponent}, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
