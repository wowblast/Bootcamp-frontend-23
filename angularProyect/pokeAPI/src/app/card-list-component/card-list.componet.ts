import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { CardListService } from './card-list.service';
@Component({
    selector: 'card-list-component',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.css']

})
export class CardListComponent implements OnInit {
pokemonData: any= [];
datatest = {name:"test name", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"};
results:any;
    
    
    constructor (public cardListService: CardListService ) {
              

    }
    ngOnInit(): void {
        this.cardListService.getPokemonList().subscribe(data => {
            this.results = data.results
            console.log("pokemons", data)

            this.results.forEach((pokemon: any) => {
                this.cardListService.getPokemon(pokemon.url).subscribe(pokemonInfo => {
                    console.log(pokemonInfo.name+ " "+ pokemonInfo.sprites.back_default)
                    this.pokemonData.push({name:pokemonInfo.name, img:pokemonInfo.sprites.back_default})
                })
            });

        })
    }

}