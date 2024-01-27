import { Injectable } from '@angular/core';
import { Chambre } from '../modele/chambre';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChambreServiceService {
//URL du Backend
url1 = "http://localhost:8081/api/chambre/";

httpOption={
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
};

  constructor( private http: HttpClient) { }
  

  getAllChambres(){
   return this.http.get<Chambre[]>(this.url1+'all' );
  }
  addchambre(c:Chambre){
    return this.http.post<Chambre>(this.url1+'add', c, this.httpOption);
  }
  updateChambre(id:number, c:Chambre){
    return this.http.put<Chambre>(`${this.url1}${id}`,c, this.httpOption);
  }
  getChaById(id:number){
    return this.http.get<Chambre>(this.url1+id);
  }
  
  getChambresParNomBloc(nomBloc:string){
    return this.http.get<Chambre[]>(this.url1+'getChambresParNomBloc/'+nomBloc)
  }
}
