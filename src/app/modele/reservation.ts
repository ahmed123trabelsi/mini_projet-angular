import { Etudiant } from "./etudiant";

export class Reservation {
    id!: number;
    idReservation!:string;
 
   dateDebut!:string;
  dateFin!:string;
    estValide!: boolean;  
    etudiants!:Etudiant[]
}
