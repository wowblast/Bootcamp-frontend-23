import { NgModule } from "@angular/core";
import { CardListComponent } from './card-list-component/card-list.componet';
import { CardComponent } from './card-component/card.component';
import { SharedModule } from "../shared/shared.module";
import { SearchComponent } from './search-component/search.component';

export const modules = [
    SharedModule
  ];
  
  
  @NgModule({
    imports: modules,
    exports: [...modules],
    declarations: [CardListComponent, CardComponent, SearchComponent]
  })
  export class PokemonListModule { }