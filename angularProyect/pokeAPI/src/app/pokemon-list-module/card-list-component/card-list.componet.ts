import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { generations, generationType } from '../../shared/config/generationTypes';
import { CardListService } from '../../services/pokemon-list-services/card-list.service';
import { pokemonColorMap } from '../../shared/config/pokemonColorHash';
import { ActivatedRoute } from '@angular/router';
import { PokemonProfile } from 'src/app/shared/interfaces/pokemonProfile';
@Component({
  selector: 'card-list-component',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  pokemonData: any = [];
  datatest = {
    name: 'test name',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
  };
  results: any;
  data: any;
  
  constructor(public cardListService: CardListService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.data = this.route.snapshot.data?.['message'];
    this.cardListService.getPokemonList().subscribe((data) => {
      this.results = data.results;
      this.results.forEach((pokemon: any) => {
        this.cardListService
          .getPokemon(pokemon.url)
          .subscribe(async (pokemonInfo: PokemonProfile) => {           
            this.pokemonData.push({
              name: pokemonInfo.name,
              img: pokemonInfo.sprites.back_default,
              generation: await this.setPokemonGeneration(
                pokemonInfo.species.url),
              id: pokemonInfo.id,
              backgroundColor: pokemonColorMap[pokemonInfo.id]
              
            });
          });
      });
    });
  }

  async setPokemonGeneration(speciesUrl: string) {
    const speciesData = await firstValueFrom(
      this.cardListService.getGeneration(speciesUrl)
    );
    const generation: string = speciesData.generation.name;
    console.log("generation ", generation)
    const test = generations;
    return test[generation as generationType];
  }

  sortPokemonsByGeneration() {
    this.pokemonData = this.pokemonData.sort((a: any,b: any) => a.generation - b.generation);
  }
}
