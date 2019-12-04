import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-lvl',
  templateUrl: './select-lvl.component.html',
  styleUrls: ['./select-lvl.component.scss']
})
export class SelectLvlComponent implements OnInit {
  private sub:any;
  private tipo:any;
  private jugador: string;
  private nivel: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.jugador = ''
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.tipo = params['tipo'] ;
      });
      
      if (this.tipo == '1') {
        
        this.jugador = 'un jugador'
      }else if (this.tipo == '2') {
        
        this.jugador = 'dos jugadores'
      }
      
  }

  ngOnDestroy(){
    this.jugador = ''
  }
  
  

  operaciones(nivel){
    this.nivel = nivel 
    this.router.navigate(['/operaciones'], {queryParams:{tipo:this.tipo, nivel:this.nivel}})
  }

  volver(){
    this.router.navigate(['/players'])
  }

}
