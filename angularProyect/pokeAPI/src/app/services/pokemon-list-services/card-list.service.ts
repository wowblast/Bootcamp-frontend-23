import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import {config} from '../../shared/config/config';
@Injectable()
export class CardListService{

    constructor(private http: HttpClient) { }

    getPokemonList(pokemonLength?:string): Observable<any> {
        return this.http.get<any>(config.baseUrl+config.pokemons+(pokemonLength? pokemonLength: ''))
    }

    getPokemon(urls: string): Observable<any> {
        return this.http.get<any>(urls)
    }

    getGeneration(url: string): Observable<any> {
        return this.http.get<any>(url)
    }

}