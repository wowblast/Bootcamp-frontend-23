import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileViewComponent } from './profile-view-component/profile-view.component';

const routes: Routes = [
    {
        path: 'profile/:id',
        component: ProfileViewComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }