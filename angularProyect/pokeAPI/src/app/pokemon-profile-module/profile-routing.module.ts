import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileViewComponent } from './profile-view-component/profile-view.component';
import { PokemonService } from '../services/pokemon-profile-services/pokemon.service';
import { PokemonProfileResolver } from '../resolvers/pokemon-profile.resolver';

const routes: Routes = [
    {
        path: 'pokemons/profile/:id',
        component: ProfileViewComponent,
        resolve: { profile: PokemonProfileResolver} 
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PokemonService],

})
export class PokemonRoutingModule { }