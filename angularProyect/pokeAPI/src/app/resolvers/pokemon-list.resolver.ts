import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { CardListService } from '../services/pokemon-list-services/card-list.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonListResolver implements Resolve<Observable<any>> {
  constructor(public cardListService: CardListService) {}
   resolve(): Observable<any> {
    return this.cardListService.getPokemonList()
  }
}