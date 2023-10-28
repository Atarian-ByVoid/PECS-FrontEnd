import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private router: Router) {}
  routes = [
    { path: '/home', label: 'Home' },
    { path: '/cadastro-crianca', label: 'Criança Cadastrada' },
    { path: '/tabela', label: 'Quadro de Rotina' },
    { path: '/calendario', label: 'Calendario' },
    { path: '/games', label: 'Jogos' },
    { path: '/perfil', label: 'Meu Perfil' },
  ];

  logout() {
    this.router.navigate(['/login']);
  }
}
