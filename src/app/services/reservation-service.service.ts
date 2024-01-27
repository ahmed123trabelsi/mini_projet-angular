import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../modele/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  url1 = "http://localhost:8081/api/reservation/";

  httpOption={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  };
  
    constructor( private http: HttpClient) { }
    
  
    getAllres(){
     return this.http.get<Reservation[]>(this.url1+'all');
    }
    updateReservation(r:Reservation){
      return this.http.put<Reservation>(this.url1+r.id, r, this.httpOption);
    }
 
    deleteReservation(id:number){
      return this.http.delete<Reservation>(this.url1+"/"+id);
    }
    getResById(id:number){
      return this.http.get<Reservation>(this.url1+"/"+id);
    }
    ajouterReservation(numChambre: number, cin: number){
      return this.http.post<Reservation>(this.url1+'ajouterReservationEtAssignerAChambreEtAEtudiant/'+ numChambre+'/'+ cin , this.httpOption);
    }
  
    annulerReservation(cinEtudiant: number) {
      return this.http.delete<Reservation>(this.url1+'annulerReservation/'+cinEtudiant, this.httpOption);
    }
}
