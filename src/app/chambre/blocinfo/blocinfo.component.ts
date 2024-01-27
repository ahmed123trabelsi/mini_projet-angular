import { Component, Input, SimpleChanges } from '@angular/core';
import { Bloc } from 'src/app/modele/bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-blocinfo',
  templateUrl: './blocinfo.component.html',
  styleUrls: ['./blocinfo.component.css']
})
export class BlocinfoComponent {
  @Input() blocId!: number ;
  b!: Bloc; 

  constructor(private blocService: BlocService) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['blocId'] && !changes['blocId'].firstChange) {
      this.retrieveBlocDetails(this.blocId);
    }
  }
  


  retrieveBlocDetails(id: number) {
    this.blocService.getBlocById(id).subscribe(
      (data) => {
        this.b= data;
        console.log(this.b);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
