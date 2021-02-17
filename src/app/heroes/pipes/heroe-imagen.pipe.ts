import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroeImagen'
})
export class HeroeImagenPipe implements PipeTransform {

  transform(heroe: Heroe): unknown {
    return `./assets/heroes/${heroe.id}.jpg`;
  }

}
