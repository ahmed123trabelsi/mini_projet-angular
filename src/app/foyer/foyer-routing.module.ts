import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoyerComponent } from './addfoyer/addfoyer.component';
import { BlocsparfoyersComponent } from './blocsparfoyers/blocsparfoyers.component';
import { EditfoyerComponent } from './editfoyer/editfoyer.component';
import { FoyerComponent } from './foyer/foyer.component';

const routes: Routes = [{path:'', component:FoyerComponent},{path:'addfoyer', component:AddfoyerComponent},{path:'editfoyer/:idFoyer', component:EditfoyerComponent},
{ path:'listeblocs/:nomFoyer', component: BlocsparfoyersComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
