import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/modele/bloc';
import { Foyer } from 'src/app/modele/foyer';
import { Universite } from 'src/app/modele/universite';
import { FoyerService } from 'src/app/services/foyer.service';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-addfoyer',
  templateUrl: './addfoyer.component.html',
  styleUrls: ['./addfoyer.component.css']
})
export class AddfoyerComponent {
  l!: number;
  f!: Foyer;
 
blocs:Bloc[]=[]
  constructor(private fo: FoyerService, private R: Router) { }

  ngOnInit(): void {
    this.fo.getAllFoyers().subscribe(data => this.l = data.length + 1);
  }

  add(f: NgForm) {

       const maFoyer: Foyer = {
        "idFoyer": this.l,
        "capaciteFoyer": f.value.capaciteFoyer,
        "nomFoyer": f.value.nomFoyer,
      
        "blocs":this.blocs,
      };

      this.fo.addFoyer(maFoyer).subscribe(() => {
        alert('foyer ajoutée !');
        this.R.navigate(['foyer']);
      });
    
  }
}
