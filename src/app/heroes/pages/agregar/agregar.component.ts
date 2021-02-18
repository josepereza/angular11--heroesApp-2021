import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  heroe:Heroe={
   alter_ego :'',
   superhero: '',
   characters: '',
   publisher:Publisher.DCComics,
   first_appearance:'',
   alt_img: ''
  }
 publisher=[
{
  id:"DC Comics",
  desc:'Dc - Comics'
},
{
  id:"Marvel Comics",
  desc:'Marvel Comics'
},
{
  id:"DC Comics",
  desc:'Dc - Comics'
},
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
