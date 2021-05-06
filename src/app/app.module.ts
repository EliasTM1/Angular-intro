import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
//  Inside this decorator we define ->
@NgModule({
  //  Componentes
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    //  Other Modules
    BrowserModule
  ],
  // providers are services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
