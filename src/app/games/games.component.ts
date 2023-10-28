import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent {
  constructor(private router: Router) {}

  telaInterativa() {
    this.router.navigate(['/tela-interativa']);
  }
  pintura() {
    this.router.navigate(['/pintura']);
  }
  simuladoMusical() {
    this.router.navigate(['/simulado-musical']);
  }

  jogoMemoria() {
    this.router.navigate(['/jogo-memoria']);
  }
}
