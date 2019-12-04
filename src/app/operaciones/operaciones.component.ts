import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SourceNode } from 'source-list-map';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {
  constructor(private route: ActivatedRoute,
  private router: Router) { }

  private tipo: string;
  private sub: any;
  private nivel: string;
  private stipo:any;
  private snivel:any;
  public lista:number[];
    

  ngOnInit() {
    this.stipo = '';
    this.snivel = '';
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.tipo = params['tipo'];
        this.nivel = params['nivel'];
      });
      if (this.tipo == '1'){
        this.stipo = 'un jugador'
      }else{
        this.stipo = 'dos jugadores'
      }
      if(this.nivel == '1'){
        this.snivel = 'FACIL'
      }else if (this.nivel == '2'){
        this.snivel = 'MEDIO'
      }else{
        this.snivel = 'DIFICIL'
      }
      
      console.log(this.tipo, this.nivel)
      this.lista = [1,2,3,4,5,6,7,7,8,9,9,3,5,76,2,21,43,5,6,5,3,2,42,43,7,12,13,2,1]

  }
  ngOnDestroy(){
    this.snivel = ''
    this.stipo = ''
    this.tipo = ''
    this.tipo = ''
  }
  volver(){
    this.router.navigate(['/inicio'])
  }
}