import { Component } from '@angular/core';
import { GravidadeTEA, SubtipoTEA } from 'src/utils/subtipo-tea.enum';
import { AuthService } from '../auth/auth.service';
import { ErrorService } from '../error-popup/error-popup.service';
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
    private cadastarCriancaService: CadastrarCriancaService,
    private errorService: ErrorService
  ) { }


  formatDocumento(event: any) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    if (value.length === 11) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
    }
    input.value = value;
  }

  cadastrarPaciente() {
    const userId = this.authService.getUserId();

    if (userId) {
      this.paciente.idUsuario = userId;

      this.cadastarCriancaService.criarPaciente(this.paciente).subscribe(
        (resposta) => {
        },
        (erro) => {
          this.errorService.openErrorDialog({ message: 'Erro ao cadastar a criança na plataforma' });
        }
      );
    }
  }

}
