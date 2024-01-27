import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/modele/bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.css']
})
export class BlocComponent {
  numChambersInput: string = ''; // Champ de saisie pour les numéros de chambre
  nomBlocInput: string = ''; // Champ de saisie pour le nom du bloc
 bloc!:Bloc
  blocs:Bloc[]=[];




  
  constructor(private blocService: BlocService,private R:Router) { }
  ngOnInit(): void {
    this.blocService.getAllBlocs().subscribe(data => this.blocs=data);
  }


  affecterChambres(): void {
    // Convertir la chaîne de numéros de chambre en un tableau
    const numChambersArray: number[] = this.numChambersInput.split(',').map(num => +num.trim());
  
    // Appeler la méthode du service avec les valeurs des champs d'entrée
    this.blocService.affecterChambresABloc(numChambersArray, this.nomBlocInput)
      .subscribe(
        () => {
          alert('Chambres affectées au bloc avec succès');
          this.R.navigate(['bloc']);
        },
        (error) => {
          console.error('Erreur lors de l\'affectation des chambres au bloc', error);
        }
      );
  }
  delete(id:number){
    this.blocService.deleteBloc(id).subscribe(()=>this.ngOnInit());
  }
 
}
