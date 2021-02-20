import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroeImagen',
  // pure:true
})
export class HeroeImagenPipe implements PipeTransform {

  transform(heroe: Heroe): unknown {

    if (!heroe.id){
      return 'assets/no-image.png'
    }else if (heroe.alt_img){
      return heroe.alt_img;
    }
    return `./assets/heroes/${heroe.id}.jpg`;
  }

}
