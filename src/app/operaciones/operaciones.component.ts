import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SourceNode } from 'source-list-map';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})

export class OperacionesComponent implements OnInit {
  
  public tiempototal: number = 6000;
  public operacion: string;
  public timeLeft: number = 300;
  public interval;
  public timeLeftoperacion: number;
  public resultado;
  public operadores = ['+', '-'];
  public operadoresdificil = ['+', '-', '*', '/'];
  public operador;
  public resultante;
  public tipo: string;
  public sub: any;
  public nivel: string;
  public stipo: any;
  public snivel: any;
  public lista: number[] = [];
  public uno: number;
  public dos: number;
  public clic: number = 0;
  public endgame;
  public endgametext;
  public jugador;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private config: NgbModalConfig
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
  }



  ngOnInit() {
    this.clic = 0;
    this.modalService.dismissAll()
    this.tiempototal = 6000;
    this.stipo = '';
    this.snivel = '';
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.tipo = params['tipo'];
        this.nivel = params['nivel'];
      });

    if (this.tipo == '1') { this.stipo = 'un jugador' }
    else { this.stipo = 'dos jugadores' };

    if (this.nivel == '1') { 
      this.snivel = 'FACIL' 
    }
    else if (this.nivel == '2') { 
      this.snivel = 'MEDIO' 
    }
    else { 
      this.snivel = 'DIFICIL' 
    };
    this.timeLeftoperacion = this.seleccionarTiempo()
    this.listavariable()
    this.tiempodejuego()
  }

  listavariable() {
    if (this.nivel != "3") {
      for (let i = 0; i < 28; i++) {
        this.lista[i] = Math.floor(Math.random() * 20) + 1;
      }
    } else {
      for (let i = 0; i < 28; i++) {
        this.lista[i] = Math.floor(Math.random() * 50) + 1;
      }
    }
  }
  seleccionarTiempo(){
    if(this.nivel != "3"){
      return 700
    }else{
      return 1300
    }
    
  }

  tiempodejuego() {
    this.interval = setInterval(() => {
      if (this.tiempototal > 0) {
        this.tiempototal--;
      } else {
        //mostrar resultados y volver al inicio
       //this.salir()
        //this.router.navigate(['/inicio'])
      }
    }, 1)
  }

  salir(){
    clearInterval(this.interval);
    this.interval = null
    this.modalService.open(this.endgame)
  }

  cuentaregresiva() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.clic = 0
        this.pausar()
      }
    }, 1)
  }

  pausar() {
    clearInterval(this.interval);
    this.timeLeft = 300
  }

  cuentoperacion() {
    this.interval = setInterval(() => {
      if (this.timeLeftoperacion > 0) {
        this.timeLeftoperacion--;
      } else {
        this.pausar()
        if (this.modalService.hasOpenModals()){
          this.modalService.dismissAll()
        }
      }
    }, 1)
  }

  seleccionar(e, content) {
    
    this.clic++
    this.timeLeftoperacion = this.seleccionarTiempo()
    if (this.clic == 1) {
      this.uno = e
      this.cuentaregresiva()
    }


    if (this.clic == 2) {
      this.pausar()
      this.timeLeft = 300;
      this.dos = e

      this.operacion = this.seleccionarOperador(this.uno, this.dos)
      console.log(this.operacion + ' ' + this.resultante)
      this.clic = 0
      this.cuentoperacion()
      console.log(content)
      this.modalService.open(content)
        .result.then(() => { 

        }, () => { })
    }
  }
  enter(resultado) {
    
    if (resultado == this.resultante) {
      console.log(true)
    }else{
      console.log(false)
    }
    
    //console.log(this.resultante)
    //console.log(this.operacion)
    //console.log(resultado)
    if (this.modalService.hasOpenModals()){
      this.modalService.dismissAll()
    }
    this.resultado = null

  }

  seleccionarOperador(uno, dos) {
    let indice = 0;
    if (this.nivel != '3') {
      indice = Math.floor(Math.random() * 2);
      //console.log(indice)
      this.operador = this.operadores[indice]
    } else {
      indice = Math.floor(Math.random() * 4);
      //console.log(indice)
      this.operador = this.operadoresdificil[indice]
    }
    //console.log(indice)
    //console.log(this.operador)
    if (this.operador == "+") { this.resultante = this.suma(uno, dos) }
    else if (this.operador == "-") { this.resultante = this.resta(uno, dos) }
    else if (this.operador == "*") { this.resultante = this.mutiplicacion(uno, dos) }
    else if (this.operador == "/") { this.resultante = this.division(uno, dos) }
    //console.log(this.resultante)
    return uno + this.operador + dos + "= "
  }

  suma(operador: number, operando: number) {
    return operador + operando
  }
  resta(operador: number, operando: number) {
    return operador - operando
  }

  mutiplicacion(operador: number, operando: number) {
    return operador * operando
  }

  division(operador: number, operando: number) {
    return operador / operando
  }


  volver() {
    this.router.navigate(['/inicio'])
  }
  ngOnDestroy() {
    clearInterval(this.interval);
    this.interval = null;
    this.tiempototal = 0
    this.snivel = ''
    this.stipo = ''
    this.tipo = ''
    this.tipo = ''

    if (this.modalService.hasOpenModals()){
      this.modalService.dismissAll()
    }
    this.modalService = null

  }
}