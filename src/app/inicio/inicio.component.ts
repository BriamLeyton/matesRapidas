import { Component, OnInit } from '@angular/core';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
      //window.location.reload();
  }

  seleccionar(){
    this.router.navigate(['/players'])
  }
  reglas(){
    this.router.navigate(['/reglas'])
  }
}
