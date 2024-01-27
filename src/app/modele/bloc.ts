import { Chambre } from "./chambre";
import { Foyer } from "./foyer";

export class Bloc {
     idBloc!:number;
     nomBloc!:string;
    capciteBloc!:number;

    f?:Foyer
 chambres?:Chambre[];
}
