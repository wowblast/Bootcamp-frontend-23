import { NgModule } from "@angular/core";
import { NavBarComponent } from "./navbar-component/navbar.component";
import { CardListComponent } from './card-list-component/card-list.componet';
import { CardComponent } from './card-component/card.component';
import { SharedModule } from "../shared/shared.module";

export const modules = [
    SharedModule
  ];
  
  
  @NgModule({
    imports: modules,
    exports: [...modules],
    declarations: [NavBarComponent, CardListComponent, CardComponent]
  })
  export class PokemonListModule { }