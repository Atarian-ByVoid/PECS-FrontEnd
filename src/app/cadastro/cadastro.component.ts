import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/utils/enums';
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
  generoEnum = Genero;

  generoSelecionado: Genero | undefined;
  usuario = {
    email: '',
    senha: '',
    nome: '',
    telefone: '',
    dataNascimento: new Date().toISOString(),
    username: '',
    // cpf: '',
    // rg: '',
    // logradouro: '',
    // uf: '',
    // bairro: '',
    // cidade: '',
    // generoSelecionado: Genero.FEMININO,
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
            email: '',
            senha: '',
            nome: '',
            telefone: '',
            dataNascimento: new Date().toISOString(),
            username: '',
            // cpf: '',
            // rg: '',
            // logradouro: '',
            // uf: '',
            // bairro: '',
            // cidade: '',
            // generoSelecionado: Genero.FEMININO,
          };

          this.router.navigate(['']);
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
