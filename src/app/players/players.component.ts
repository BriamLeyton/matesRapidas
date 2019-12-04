import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  volver() {
    this.router.navigate(['/inicio'])
  }
  uno() {
    this.router.navigate(['/selectLvl'], { queryParams: { tipo: '1' } })
  }
  dos() {
    this.router.navigate(['/selectLvl'], { queryParams: { tipo: '2' } })
  }
}
