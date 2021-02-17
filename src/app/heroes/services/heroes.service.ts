import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Heroe} from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(public http:HttpClient) {
    this.getHeroes()
   }
  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>('http://localhost:3000/heroes')
    
  }
  getHeroePorId(id:string):Observable<Heroe>{
    console.log('mi mi id', id)
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${id}`)
  }
  getSugerencias(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`http://localhost:3000/heroes/?q=${termino}&_limit=6`)
  }
}
