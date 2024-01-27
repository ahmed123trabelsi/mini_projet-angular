import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {path: 'chambre',loadChildren:()=>import('./chambre/chambre.module').then(x => x.ChambreModule)},
{path: 'reservation',loadChildren:()=>import('./reservation/reservation.module').then(x => x.ReservationModule)},
{path: 'bloc',loadChildren:()=>import('./bloc/bloc.module').then(x => x.BlocModule)},
{path: 'etudiant',loadChildren:()=>import('./etudiant/etudiant.module').then(x => x.EtudiantModule)},
{path: 'foyer',loadChildren:()=>import('./foyer/foyer.module').then(x => x.FoyerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
