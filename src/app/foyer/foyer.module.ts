import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import { EditfoyerComponent } from './editfoyer/editfoyer.component';
import { AddfoyerComponent } from './addfoyer/addfoyer.component';
import { FoyerComponent } from './foyer/foyer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoyerparuComponent } from './foyerparu/foyerparu.component';
import { BlocsparfoyersComponent } from './blocsparfoyers/blocsparfoyers.component';


@NgModule({
  declarations: [
    EditfoyerComponent,
    AddfoyerComponent,
    FoyerComponent,
    FoyerparuComponent,
    BlocsparfoyersComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FoyerModule { }
