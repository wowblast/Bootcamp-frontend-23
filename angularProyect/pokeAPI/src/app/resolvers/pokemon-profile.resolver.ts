import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, switchMap, firstValueFrom } from 'rxjs';
import { PokemonService } from '../services/pokemon-profile-services/pokemon.service';
import { PokemonEvolution } from '../shared/interfaces/pokemonEvolution';
import { PokemonProfile } from '../shared/interfaces/pokemonProfile';
import { PokemonSpecies } from '../shared/interfaces/pokemonSpecies';
import { config } from '../shared/config/config';

@Injectable({
  providedIn: 'root',
})
export class PokemonProfileResolver
  implements Resolve<Observable<PokemonProfile>>
{
  constructor(public pokemonProfileService: PokemonService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<PokemonProfile> {
    console.log('profile resolver');
    return this.pokemonProfileService
      .getPokemonById(route.paramMap.get('id') || '1')
      .pipe(
        switchMap(async (pokemon: PokemonProfile) => {
          const specie: PokemonSpecies = await firstValueFrom(
            this.pokemonProfileService.getPokemonSpecies(pokemon.species.url)
          );
          const evolution: PokemonEvolution = await firstValueFrom(
            this.pokemonProfileService.getPokemonEvolutionChain(
              specie.evolution_chain.url
            )
          );
          pokemon.evolutions = [];
          this.addEvolution(pokemon, evolution.chain);
          return pokemon;
        })
      );
  }

  addEvolution(pokemon: PokemonProfile, evolution: any) {
    const string = evolution.species.url;
    const regex = /\d+/g;
    const match = string.match(regex);
    const number = match ? parseInt(match[1]) : null;
    console.log();
    pokemon.evolutions?.push({
      evolutionLink: config.imgUrl + number+'.png',
      evolutionName: evolution.species.name,
    });
    if (evolution.evolves_to.length == 1)
      this.addEvolution(pokemon, evolution.evolves_to[0]);
  }
}
