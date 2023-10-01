// registro.component.ts

import { Component } from '@angular/core';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private cadastroService: CadastroService) { }

  usuario = {
    email: '',
    senha: '',
    nome: '',
    telefone: '',
    cpf: '',
    rg: '',
    dataNascimento: new Date().toISOString(),
    logradouro: '',
    uf: '',
    bairro: '',
    cidade: '',
    username: '',
    gender: 'FEMALE'
  };



  registrar() {
    this.cadastroService.cadastrarUsuario(this.usuario).subscribe(
      response => {
        console.log('Usuário registrado com sucesso:', response);
      },
      error => {
        console.error('Erro ao registrar o usuário:', error);
      }
    );
  }
}

