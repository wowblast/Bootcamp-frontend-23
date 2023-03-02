import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardListComponent} from './pokemon-list-module/card-list-component/card-list.componet'
import { CardListService } from './pokemon-list-module/card-list-component/card-list.service';
import { CardComponent } from './pokemon-list-module/card-component/card.component';
import { NavBarComponent } from './pokemon-list-module/navbar-component/navbar.component';
import { SharedModule } from './shared/shared.module';
import { ProfileViewModule } from './pokemon-profile-module/profie-view.module';
import { PokemonListModule } from './pokemon-list-module/pokemon-list.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    ProfileViewModule,
    PokemonListModule
  ],
  providers: [CardListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
