import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './pokemon-list-module/card-list-component/card-list.componet';
import { PokemonListResolver } from './resolvers/pokemon-list.resolver';
const routes: Routes = [
  {
    path: 'pokemons',
    component: CardListComponent,
    resolve: { message: PokemonListResolver },
  },
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
