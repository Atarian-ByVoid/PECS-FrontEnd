import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from '../error-popup/error-popup.service';
import { CadastroService } from './cadastro.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  constructor(
    private cadastroService: CadastroService,
    private router: Router,
    private errorService: ErrorService
  ) {}

  usuario = {
    email: ['', [Validators.required, Validators.email]],
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
    genero: 'FEMININO',
  };

  mensagensDeErro = {
    email: 'E-mail é obrigatório e deve ser um e-mail válido.',
    senha: 'Senha é obrigatória.',
  };

  registrar() {
    this.cadastroService.cadastrarUsuario(this.usuario).subscribe(
      (response) => {
        if (response) {
          console.log('Usuário registrado com sucesso:', response);

          this.usuario = {
            email: [''],
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
            genero: 'FEMININO',
          };

          this.router.navigate(['/login']);
        }
      },
      (error) => {
        console.error('Erro no registro:', error);
        this.errorService.openErrorDialog({
          message: 'Verifique suas credenciais e tente novamente',
        });
      }
    );
  }
}
