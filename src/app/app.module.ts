import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectLvlComponent } from './select-lvl/select-lvl.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlayersComponent } from './players/players.component';
import { ReglasComponent } from './reglas/reglas.component';
import { OperacionesComponent } from './operaciones/operaciones.component';



@NgModule({
  declarations: [
    AppComponent,
    SelectLvlComponent,
    InicioComponent,
    PlayersComponent,
    ReglasComponent,
    OperacionesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
