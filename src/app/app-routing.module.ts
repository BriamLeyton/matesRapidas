import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectLvlComponent } from './select-lvl/select-lvl.component';
import { InicioComponent } from './inicio/inicio.component'
import { PlayersComponent } from './players/players.component';
import { ReglasComponent } from './reglas/reglas.component';
import { OperacionesComponent } from './operaciones/operaciones.component';




const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'prefix'},
  { path: 'inicio', component: InicioComponent  },
  { path: 'selectLvl', component: SelectLvlComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'reglas', component: ReglasComponent },
  { path: 'operaciones', component: OperacionesComponent },
  { path: '**', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
