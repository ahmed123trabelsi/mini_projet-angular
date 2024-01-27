import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foyer } from 'src/app/modele/foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyerparu',
  templateUrl: './foyerparu.component.html',
  styleUrls: ['./foyerparu.component.css']
})
export class FoyerparuComponent {
  
 foyers:Foyer[]=[];
 constructor(private foyerService: FoyerService,private route: ActivatedRoute) { }
 foyer!:Foyer; // Variable pour stocker les chambres récupérées



 ngOnInit(): void {

   this.route.params.subscribe(params => {
     const nomUniversite = params['nomUniversite'];
     this.foyerService.getFParU(nomUniversite).subscribe(data => {
       this.foyer = data; // Assignez les chambres récupérées à la variable du composant
     });
   });
 }



 delete(id:number){
   this.foyerService.deleteFoyer(id).subscribe(()=>this.ngOnInit());
 }
}


