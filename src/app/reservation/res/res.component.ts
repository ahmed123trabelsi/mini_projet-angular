import { Component } from '@angular/core';
import { Reservation } from 'src/app/modele/reservation';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent {
  reservations:Reservation[] = [];

  constructor(  private res: ReservationServiceService) { }
  ngOnInit(): void {
    this.res.getAllres().subscribe(data => this. reservations=data);
  }
}
