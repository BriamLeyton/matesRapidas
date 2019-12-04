import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reglas',
  templateUrl: './reglas.component.html',
  styleUrls: ['./reglas.component.scss']
})
export class ReglasComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }
  volver(){
    this.router.navigate(['/inicio'])
  }

}
