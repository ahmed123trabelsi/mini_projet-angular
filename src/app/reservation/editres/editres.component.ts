import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/modele/reservation';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';

@Component({
  selector: 'app-editres',
  templateUrl: './editres.component.html',
  styleUrls: ['./editres.component.css']
})
export class EditresComponent {
/*   myForm: FormGroup;
  id!:number;
  reservation!:Reservation;

  constructor(private actR:ActivatedRoute , private resS :ReservationServiceService,private R :Router,private formBuilder:FormBuilder){
    this.myForm = this.formBuilder.group({
      id:[0],
      idReservation: [''],
      
     
    });
  }
  ngOnInit():void{
    this.id= this.actR.snapshot.params['id'];
    this.resS.getResById(this.id).subscribe((data)=>{
      this. reservation=data;
      this.myForm.setValue(this.reservation);}

  
    );
  }



updateUser(){
    
 this.resS.updateReservation(this.myForm.value).subscribe(()=>this.R.navigate(['users']));

} */

}
