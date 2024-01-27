import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chambre } from 'src/app/modele/chambre';
import { ChambreServiceService } from 'src/app/services/chambre-service.service';

@Component({
  selector: 'app-list-cparnom-b',
  templateUrl: './list-cparnom-b.component.html',
  styleUrls: ['./list-cparnom-b.component.css']
})
export class ListCparnomBComponent {
  chambres: Chambre[] = []; // Variable pour stocker les chambres récupérées

  constructor(private route: ActivatedRoute, private votreService: ChambreServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const nomBloc = params['nomBloc'];
      this.votreService.getChambresParNomBloc(nomBloc).subscribe(chambres => {
        this.chambres = chambres; // Assignez les chambres récupérées à la variable du composant
      });
    });
  }
}
