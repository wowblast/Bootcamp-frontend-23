import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { CardListService } from '../services/pokemon-list-services/card-list.service';
import { PokemonService } from '../services/pokemon-profile-services/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonProfileResolveddr implements Resolve<Observable<any>> {
  constructor(public pokemonProfileService: PokemonService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.pokemonProfileService.getPokemonById(
      route.paramMap.get('id') || ''
    );
  }
}
