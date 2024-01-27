import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from '../modele/bloc';
import { Foyer } from '../modele/foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  //URL du Backend
  url1 = "http://localhost:8081/api/foyer/";

  httpOption={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  };
  
    constructor( private http: HttpClient) { }
    
  
    getAllFoyers(){
     return this.http.get<Foyer[]>(this.url1+'all' );
    }
    addFoyer(f:Foyer){
      return this.http.post<Foyer>(this.url1+'add', f, this.httpOption);
    }
    updateFoyer(id:number, f:Foyer){
      return this.http.put<Foyer>(this.url1+id,f, this.httpOption);
    }
   
    getFparId(id:number){
      return this.http.get<Foyer>(this.url1+'getfoyer/'+id );
     }
    deleteFoyer(id:number){
      return this.http.delete<Foyer>(this.url1+'remove/'+id);
    }
    getFParU(nomUniversite:string){
      return this.http.get<Foyer>(this.url1+'getFParU/'+nomUniversite)
    }
    getBlocsParNomFoyer(nomFoyer:string){
      return this.http.get<Bloc[]>(this.url1+'getBlocsParNomFoyer/'+nomFoyer)
    }
  
}
