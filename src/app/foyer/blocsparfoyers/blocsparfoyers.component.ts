import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bloc } from 'src/app/modele/bloc';
import { ChambreServiceService } from 'src/app/services/chambre-service.service';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-blocsparfoyers',
  templateUrl: './blocsparfoyers.component.html',
  styleUrls: ['./blocsparfoyers.component.css']
})
export class BlocsparfoyersComponent {
  blocs: Bloc[] = []; 

  constructor(private route: ActivatedRoute, private votreService: FoyerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const nomFoyer = params['nomFoyer'];
      this.votreService.getBlocsParNomFoyer(nomFoyer).subscribe(blocs => {
        this.blocs= blocs; 
      });
    });
  }
}
