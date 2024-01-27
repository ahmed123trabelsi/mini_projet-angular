import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/modele/bloc';
import { Foyer } from 'src/app/modele/foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-editfoyer',
  templateUrl: './editfoyer.component.html',
  styleUrls: ['./editfoyer.component.css']
})
export class EditfoyerComponent {
  myForm!: FormGroup;
  id!: number;
bloc!:Bloc[];
foyer!:Foyer
  constructor(
    private actR: ActivatedRoute,
    private F: FoyerService,
    private R: Router,
    private formBuilder: FormBuilder,
  ) {
    
  
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      idFoyer: [0],
      nomFoyer: [''],
      capaciteFoyer: [''],
   
    });
 
    this.id = this.actR.snapshot.params['idFoyer'];
    this.F.getFparId(this.id).subscribe((data) => {
      this.foyer= data;
      const FSansBs = {
        idFoyer: this.foyer.idFoyer,
        nomFoyer: this.foyer.nomFoyer,
        capaciteFoyer: this.foyer.capaciteFoyer,
      };
  
      this.myForm.patchValue(FSansBs );
    
     
    });
  
  
  }

updateF(){
  const updatedValues = {
    idFoyer: this.myForm.value.idFoyer,
    nomFoyer: this.myForm.value.nomFoyer,
    capaciteFoyer: this.myForm.value.capaciteFoyer,
    blocs: this.foyer.blocs // Incluez 'f' si vous ne le mettez pas à jour ici
  };
    
 this.F.updateFoyer(this.id,updatedValues).subscribe(()=>this.R.navigate(['foyer']));

}
}
