import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../modele/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  url1 = "http://localhost:8081/api/etudiant/";
  httpOption={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  };
  
    constructor( private http: HttpClient) { }
   
      
    getAllEtudiants(){
      return this.http.get<Etudiant[]>(this.url1+'all' );
     }
     addEtudiant(e:Etudiant){
       return this.http.post<Etudiant>(this.url1+'add', e, this.httpOption);
     }
     updateEtudiant(id:number, e:Etudiant){
      return this.http.put<Etudiant>(`${this.url1}${id}`,e, this.httpOption);
    }
    getEtudiantById(id:number){
      return this.http.get<Etudiant>(this.url1+id);
    }
     deleteEtudiant(id:number){
      return this.http.delete<Etudiant>(this.url1+id);
    }
}
