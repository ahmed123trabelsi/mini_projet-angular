import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AddetudiantComponent } from './addetudiant/addetudiant.component';
import { EditetudiantComponent } from './editetudiant/editetudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EtudiantComponent,
    AddetudiantComponent,
    EditetudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EtudiantModule { }
