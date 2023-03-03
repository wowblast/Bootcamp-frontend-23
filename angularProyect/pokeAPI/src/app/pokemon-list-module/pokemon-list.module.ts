import { NgModule } from "@angular/core";
import { CardListComponent } from './card-list-component/card-list.componet';
import { CardComponent } from './card-component/card.component';
import { SharedModule } from "../shared/shared.module";

export const modules = [
    SharedModule
  ];
  
  
  @NgModule({
    imports: modules,
    exports: [...modules],
    declarations: [CardListComponent, CardComponent]
  })
  export class PokemonListModule { }