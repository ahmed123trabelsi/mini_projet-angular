import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from '../modele/bloc';

@Injectable({
  providedIn: 'root'
})
export class BlocService {


  //URL du Backend
url1 = "http://localhost:8081/api/bloc/";

httpOption={
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
};

  constructor( private http: HttpClient) { }
  

  getAllBlocs(){
   return this.http.get<Bloc[]>(this.url1+'all' );
  }
  addBloc(c:Bloc){
    return this.http.post<Bloc>(this.url1+'add', c, this.httpOption);
  }
  updateBloc(id:number, c:Bloc){
    return this.http.put<Bloc>(`${this.url1}${id}`,c, this.httpOption);
  }
  getBlocById(id:number){
    return this.http.get<Bloc>(this.url1+id);
  }
  affecterChambresABloc(numChambers: number[], nom: string) {
    const url = `${this.url1}affecterChambresABloc/${nom}`;
    return this.http.put<any>(url, numChambers);
  }
  deleteBloc(id:number){
    return this.http.delete<Bloc>(this.url1+id);
  }
  getBlocIdByName( nomBloc:string)
  {
    return this.http.get<number>(this.url1+"getBlocIdByName/"+nomBloc)
  }
}
