import { Hero } from './../models/hero.model';
import { Injectable } from '@angular/core';
import { HEROES } from './../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }
}
