import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/modele/bloc';
import { Foyer } from 'src/app/modele/foyer';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-addbloc',
  templateUrl: './addbloc.component.html',
  styleUrls: ['./addbloc.component.css']
})
export class AddblocComponent {
  l!: number;
  f!: Foyer;
 

  constructor(private blo: BlocService, private R: Router) { }

  ngOnInit(): void {
    this.blo.getAllBlocs().subscribe(data => this.l = data.length + 1);
  }

  add(f: NgForm) {

       const maBloc: Bloc = {
        "idBloc": this.l,
        "capciteBloc": f.value.capciteBloc,
        "nomBloc": f.value.nomBloc,
      
       
      };

      this.blo.addBloc(maBloc).subscribe(() => {
        alert('BLOC ajoutée !');
        this.R.navigate(['bloc']);
      });
    
  }
}
