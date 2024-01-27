import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foyer } from '../modele/foyer';
import { Universite } from '../modele/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
    //URL du Backend
    url1 = "http://localhost:8081/api/universite/";
  httpOption={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  };
  
    constructor( private http: HttpClient) { }
    getFIdByName( nomFoyer:string)
    {
      return this.http.get<number>(this.url1+'getFIdByName/'+nomFoyer)
    }
      
    getAllUniversites(){
      return this.http.get<Universite[]>(this.url1+'all' );
     }
     adduniversite(u:Universite){
       return this.http.post<Universite>(this.url1+'add', u, this.httpOption);
     }
     updateUniversite(id:number, u:Universite){
       return this.http.put<Universite>(this.url1+id,u, this.httpOption);
     }
     affecterFoyerAUniversite (idFoyer: number, nomU: string) {
      return this.http.put<Universite>( this.url1+"affecterunivfoyer/"+idFoyer+'/'+nomU,this.httpOption)
    }
    getUById(id:number){
      return this.http.get<Universite>(this.url1+id);
    }
    findUniversiteWithoutF(){
      return this.http.get<string[]>(this.url1+'findUniversiteWithoutF');
    }
  
}
