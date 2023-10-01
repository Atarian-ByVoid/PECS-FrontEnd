import { Component } from '@angular/core';
import { GravidadeTEA, SubtipoTEA } from 'src/utils/subtipo-tea.enum';
import { AuthService } from '../auth/auth.service';
import { CadastrarCriancaService } from './cadastar-crianca.service';


@Component({
  selector: 'app-cadastar-crianca',
  templateUrl: './cadastar-crianca.component.html',
  styleUrls: ['./cadastar-crianca.component.css']
})
export class CadastarCriancaComponent {

  paciente: any = {
    idUsuario: '',
    dataNascimento: new Date().toISOString(),
    nome: '',
    documento: '',
    diagnostico: [
      {
        dataDiagnostico: new Date().toISOString(),
        tratamento: '',
        subtipoTEA: SubtipoTEA.AUTISMO_CLASSICO,
        gravidadeTEA: GravidadeTEA.LEVE,
      },
    ],
  };
  subtiposTEA = SubtipoTEA;
  gravidadesTEA = GravidadeTEA;


  constructor(
    private authService: AuthService,
    private cadastarCriancaService: CadastrarCriancaService
  ) { }

  cadastrarPaciente() {
    const userId = this.authService.getUserId();

    if (userId) {
      this.paciente.idUsuario = userId;

      this.cadastarCriancaService.criarPaciente(this.paciente).subscribe(
        (resposta) => {
        },
        (erro) => {
        }
      );
    } else {
      console.error('ID do usuário não encontrado no token.');
    }
  }

}
