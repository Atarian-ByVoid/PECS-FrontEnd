import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastarCriancaComponent } from './cadastar-crianca/cadastar-crianca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StyleComponentComponent } from './material/style-component/style-component.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'style', component: StyleComponentComponent },
  { path: 'tabela', component: TabelaComponent },
  { path: 'cadastar-crianca', component: CadastarCriancaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
