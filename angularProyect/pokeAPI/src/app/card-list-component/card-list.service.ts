import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import {config} from '../config/config';
export class CardListService{

    constructor(private http: HttpClient) { }

    getPokemonList(): Observable<any> {
        return this.http.get<any>(config.baseUrl+config.pokemons)
    }

}