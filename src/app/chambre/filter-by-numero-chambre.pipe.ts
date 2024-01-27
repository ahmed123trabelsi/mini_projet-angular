import { Pipe, PipeTransform } from '@angular/core';
import { Chambre } from '../modele/chambre';

@Pipe({
  name: 'filterByNumeroChambre'
})
export class FilterByNumeroChambrePipe implements PipeTransform {

  transform(chambres: Chambre[] = [], filterText: string): Chambre[] {
    if (!filterText || filterText.trim() === '') {
      return chambres;
    }

    return chambres.filter((chambre: Chambre) => {
      return chambre.numeroChambre.toString().includes(filterText);
    });
  }

}
