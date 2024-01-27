import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/modele/bloc';
import { Chambre } from 'src/app/modele/chambre';
import { BlocService } from 'src/app/services/bloc.service';
import { ChambreServiceService } from 'src/app/services/chambre-service.service';

@Component({
  selector: 'app-addchambre',
  templateUrl: './addchambre.component.html',
  styleUrls: ['./addchambre.component.css']
})
export class AddchambreComponent {
  l!: number;
  

  constructor(private cha: ChambreServiceService, private R: Router, private bloc: BlocService) { }


  add(f: NgForm) {
/*     this.bloc.getBlocIdByName(f.value.nomBloc).subscribe(idBloc => { */
      const maChambre: Chambre = {
        "idChambre": this.l,
        "numeroChambre": f.value.numeroChambre,
        "typeC": f.value.TypeChambre,
    /*     "b": {
          "idBloc": idBloc,
          "nomBloc": f.value.nomBloc,
          "capciteBloc": 0,
          "chambres": [],
        } */
      };

      this.cha.addchambre(maChambre).subscribe(() => {
        alert('Chambre ajoutée !');
        this.R.navigate(['chambre']);
      });
   /*  }); */
  }
}
