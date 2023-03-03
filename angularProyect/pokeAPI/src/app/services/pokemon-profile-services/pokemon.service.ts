import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import {config} from '../../shared/config/config';
@Injectable()
export class PokemonService{

    constructor(private http: HttpClient) { }

    getPokemonById(id: string): Observable<any> {
        return this.http.get<any>(config.pokemonProfileUrl+id)
    }

    getPokemonSpecies(specieUrl: string): Observable<any> {
        return this.http.get<any>(specieUrl)
    }

    getPokemonEvolutionChain(evolutionUrl: string): Observable<any> {
        return this.http.get<any>(evolutionUrl)
    }

}