import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { generations, generationType } from '../../config/generationTypes';
import { CardListService } from './card-list.service';
import { pokemonColorMap } from '../../config/pokemonColorHash';
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

  constructor(public cardListService: CardListService) {}
  ngOnInit(): void {
    this.cardListService.getPokemonList().subscribe((data) => {
      this.results = data.results;

      this.results.forEach((pokemon: any) => {
        this.cardListService
          .getPokemon(pokemon.url)
          .subscribe(async (pokemonInfo) => {           
            this.pokemonData.push({
              name: pokemonInfo.name,
              img: pokemonInfo.sprites.back_default,
              /*generation: await this.setPokemonGeneration(
                pokemonInfo.species.url)*/
              generation: Math.random() * 10,
              id: pokemonInfo.id,
              backgroundColor: pokemonColorMap[pokemonInfo.id]
              
            });
           // console.log( this.pokemonData)
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
