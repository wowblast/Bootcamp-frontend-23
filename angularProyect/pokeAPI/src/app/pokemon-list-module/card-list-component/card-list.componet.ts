import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {
  generations,
  generationType,
} from '../../shared/config/generationTypes';
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
  pokemonDisplayedData: any = []
  pokemonFilteredData: any = []
  datatest = {
    name: 'test name',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
  };
  results: any;
  data: any;
  offSetPokemon: number = 20;
  totalData: number = 0;
  isNewDataLoaded = true
  searchData: string = ''

  constructor(
    public cardListService: CardListService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.data = this.route.snapshot.data?.['message'];
      this.cardListService.getPokemonList(this.totalData > 0  ? ('?limit=20&offset='+this.totalData): undefined).subscribe((data) => {
        this.results = data.results;
        this.results.forEach((pokemon: any) => {
          this.cardListService
            .getPokemon(pokemon.url)
            .subscribe(async (pokemonInfo: PokemonProfile) => {
              this.pokemonData.push({
                name: pokemonInfo.name,
                img: pokemonInfo.sprites.back_default,
                generation: await this.setPokemonGeneration(
                  pokemonInfo.species.url
                ),
                id: pokemonInfo.id,
                backgroundColor: pokemonColorMap[pokemonInfo.id],
              });
            });
        });
        this.pokemonDisplayedData = this.pokemonData
        this.isNewDataLoaded = true
        this.totalData += this.results.length
      });
  }

  async setPokemonGeneration(speciesUrl: string) {
    const speciesData = await firstValueFrom(
      this.cardListService.getGeneration(speciesUrl)
    );
    const generation: string = speciesData.generation.name;
    const test = generations;
    return test[generation as generationType];
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollBottom = docHeight - (scrollPos + windowHeight);
    if (scrollBottom < 100) {
      if(this.isNewDataLoaded && this.searchData == '') {
        this.isNewDataLoaded =false;
        this.loadData();

      }
    }
  }
  receiveSearchData($event: string) {
      this.searchData = $event

      if(this.searchData == '') {
        this.pokemonDisplayedData = this.pokemonData
      }
      this.pokemonDisplayedData = this.pokemonData.filter((pokemon: any) => {
        return pokemon.id.toString().includes(this.searchData) || pokemon.name.includes(this.searchData) || pokemon.generation.toString().includes(this.searchData)
      })

    
  }

  sortPokemonsByGeneration() {
    this.pokemonDisplayedData = this.pokemonDisplayedData.sort(
      (a: any, b: any) => a.generation - b.generation
    );
  }
}
