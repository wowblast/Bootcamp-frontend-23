import { NgModule } from "@angular/core";
import { PokemonRoutingModule } from "./profile-routing.module";
import { ProfileViewComponent } from "./profile-view-component/profile-view.component";

export const modules = [
    PokemonRoutingModule
  ];
  
  
  @NgModule({
    imports: modules,
    exports: [...modules],
    declarations: [ProfileViewComponent]
  })
  export class ProfileViewModule { }