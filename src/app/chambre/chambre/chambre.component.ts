import { ChangeDetectorRef, Component } from '@angular/core';
import { Bloc } from 'src/app/modele/bloc';
import { Chambre } from 'src/app/modele/chambre';
import { Reservation } from 'src/app/modele/reservation';
import { ChambreServiceService } from 'src/app/services/chambre-service.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent {
  chambres:Chambre[] = [];
  b!:Bloc;
  res:Reservation[]=[];
  HoveredBloc!: number  ;
  filterValue: string = '';
  constructor(  private cha: ChambreServiceService,private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.cha.getAllChambres().subscribe(data => this.chambres=data);
  }
  setHoveredBloc(id: number) {
    console.log('Hovered Bloc ID:', id);
    this.HoveredBloc = id;
    this.cdr.detectChanges();
  }
  


}
