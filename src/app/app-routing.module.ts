import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CadastarCriancaComponent } from './cadastar-crianca/cadastar-crianca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CalendarioComponent } from './material/calendario/calendario.component';
import { BoardComponent } from './material/memory-game/board/board.component';
import { StyleComponentComponent } from './material/style-component/style-component.component';
import { TelaInterativaComponent } from './material/tela-interativa/tela-interativa.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'style', component: StyleComponentComponent },
  { path: 'tabela', component: TabelaComponent },
  { path: 'cadastar-crianca', component: CadastarCriancaComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'tela-interativa', component: TelaInterativaComponent },
  { path: 'games', component: GamesComponent },
  { path: 'jogo-memoria', component: BoardComponent },
  { path: 'perfil', component: MeuPerfilComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
