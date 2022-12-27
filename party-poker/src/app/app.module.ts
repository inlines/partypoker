import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGameComponent } from './areas/create-game/create-game.component';
import { PlayGameComponent } from './areas/play-game/play-game.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    PlayGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
