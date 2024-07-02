// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    //AppComponent
    // Otros componentes si los tienes
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Agrega HttpClientModule aquí
    AppRoutingModule
    // Otros módulos que necesites importar aquí
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }

