import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastarCriancaComponent } from './cadastar-crianca/cadastar-crianca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TabelaComponent } from './tabela/tabela.component';
const routes: Routes = [

  { path: 'cadastro', component: CadastroComponent },
  { path: 'tabela', component: TabelaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastar-crianca', component: CadastarCriancaComponent },
  { path: '', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
