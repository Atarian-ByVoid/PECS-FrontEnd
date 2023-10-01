import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CadastarCriancaComponent } from './cadastar-crianca/cadastar-crianca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StyleComponentComponent } from './material/style-component/style-component.component';
import { TabelaComponent } from './tabela/tabela.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'style', component: StyleComponentComponent },
  { path: 'tabela', component: TabelaComponent, },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cadastar-crianca', component: CadastarCriancaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
