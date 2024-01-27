import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foyer } from 'src/app/modele/foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent {

 foyers:Foyer[]=[];
 nomFoyer!:string;
 @Input() foyerDetails: Foyer | undefined;
 @Output() selectFoyer: EventEmitter<Foyer> = new EventEmitter<Foyer>();

 // ...

 onSelectFoyer(foyer: Foyer): void {
   this.selectFoyer.emit(foyer);
 }
  constructor(private foyerService: FoyerService,private route: ActivatedRoute) { }


 

  ngOnInit(): void {
    this.foyerService.getAllFoyers().subscribe(data => this.foyers=data);
   
  }



  delete(id:number){
    this.foyerService.deleteFoyer(id).subscribe(()=>this.ngOnInit());
  }
}
