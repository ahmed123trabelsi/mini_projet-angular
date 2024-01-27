import { Component } from '@angular/core';
import { Etudiant } from 'src/app/modele/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
 etudiants:Etudiant []=[]
  constructor(  private E: EtudiantService) { }
  ngOnInit(): void {
    this.E.getAllEtudiants().subscribe(data => this.etudiants=data);
  }

}
