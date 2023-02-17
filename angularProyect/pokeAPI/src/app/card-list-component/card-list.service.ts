import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import {config} from '../config/config';
@Injectable()
export class CardListService{

    constructor(private http: HttpClient) { }

    getPokemonList(): Observable<any> {
        return this.http.get<any>(config.baseUrl+config.pokemons)
    }

    getPokemon(urls: string): Observable<any> {
        return this.http.get<any>(urls)
    }

}