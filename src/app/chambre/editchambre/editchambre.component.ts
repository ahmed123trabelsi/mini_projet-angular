import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/modele/bloc';
import { Chambre } from 'src/app/modele/chambre';
import { ChambreServiceService } from 'src/app/services/chambre-service.service';

@Component({
  selector: 'app-editchambre',
  templateUrl: './editchambre.component.html',
  styleUrls: ['./editchambre.component.css']
})
export class EditchambreComponent implements OnInit {
  myForm!: FormGroup;
  id!: number;
  chambre!: Chambre;
  b!:FormGroup;
  typeC: string = '';
  constructor(
    private actR: ActivatedRoute,
    private chaS: ChambreServiceService,
    private R: Router,
    private formBuilder: FormBuilder,
  ) {
    
  
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      idChambre: [0],
      numeroChambre: ['', Validators.required],
      typeC: ['', [Validators.required, ,  Validators.pattern('^(SIMPLE|DOUBLE|TRIPLE)$')]],
      /* b:this.formBuilder.group({
        
        idBloc: [],
        
      }) */
    });
    
   /*  this.b = this.myForm.get('b') as FormGroup;// Assurez-vous que 'b' est initialisé correctement */
    this.id = this.actR.snapshot.params['idChambre'];
    this.chaS.getChaById(this.id).subscribe((data) => {
      this.chambre = data;
      const chambreSansB = {
        idChambre: this.chambre.idChambre,
        numeroChambre: this.chambre.numeroChambre,
      typeC: this.chambre.typeC,
      };
  
      this.myForm.patchValue(chambreSansB);
    
/*       if (this.chambre) {
        this.myForm.patchValue({
          idChambre: this.chambre.idChambre,
          numeroChambre: this.chambre.numeroChambre,
          typeC: this.chambre.typeC,
          b: {
            idBloc: this.chambre.b ? this.chambre.b.idBloc : null
          }
        });
      } */
    });
  }

  updateChambre(){
  const updatedValues = {
  idChambre: this.myForm.value.idChambre,
    numeroChambre: this.myForm.value.numeroChambre,
    typeC: this.myForm.value.typeC,
    b: this.chambre.b 
  };
 this.chaS.updateChambre(this.id,updatedValues).subscribe(()=>this.R.navigate(['chambre']));

}
}
