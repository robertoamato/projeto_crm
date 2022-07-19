import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteCabecalhoComponent } from './componente-cabecalho/componente-cabecalho.component';
import { ComponenteBotoesComponent } from './componente-botoes/componente-botoes.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteCabecalhoComponent,
    ComponenteBotoesComponent,
    Componente3Component,
    Componente4Component,
    Componente5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
