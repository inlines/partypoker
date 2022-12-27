import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './areas/create-game/create-game.component';
import { PlayGameComponent } from './areas/play-game/play-game.component';

const routes: Routes = [
  {
    path: '',
    component: CreateGameComponent
  },
  {
    path: ':id',
    component: PlayGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
