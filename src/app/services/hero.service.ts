import { Hero } from './../models/hero.model';
import { Injectable } from '@angular/core';
import { HEROES } from './../mock-heroes';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    return heroes;
  }
}
