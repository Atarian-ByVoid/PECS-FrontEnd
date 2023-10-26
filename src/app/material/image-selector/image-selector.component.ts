import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css'],
})
export class ImageSelectorComponent {
  feminino: string[] = [
    '/assets/feminino/Acordar.png',
    '/assets/feminino/Almoçar.png',
    '/assets/feminino/Brincar.png',
    '/assets/feminino/VerTV.png',
    '/assets/feminino/CafeManha.png',
    '/assets/feminino/Dormir.png',
    '/assets/feminino/EscovarDentes.png',
    '/assets/feminino/Estudar.png',
    '/assets/feminino/IrEscola.png',
    '/assets/feminino/Jantar.png',
    '/assets/feminino/TomarBanho.png',
    '/assets/feminino/TrocarRoupa.png',
    '/assets/feminino/UsarBanheiro.png',
  ];

  masculino: string[] = [
    '/assets/masculino/Acordar.png',
    '/assets/masculino/Almocar.png',
    '/assets/masculino/Brincar.png',
    '/assets/masculino/Brincarr.png',
    '/assets/masculino/CafeManha.png',
    '/assets/masculino/Dormir.png',
    '/assets/masculino/EscovarDentes.png',
    '/assets/masculino/Estudar.png',
    '/assets/masculino/IrEscola.png',
    '/assets/masculino/Jantar.png',
    '/assets/masculino/TomarBanho.png',
    '/assets/masculino/TrocarRoupa.png',
    '/assets/masculino/UsarBanheiro.png',
  ];

  outros: string[] = [
    '/assets/outros/Acordar.png',
    '/assets/outros/Almoco.png',
    '/assets/outros/AssistirTV.png',
    '/assets/outros/Banheiro.png',
    '/assets/outros/BeberAgua.png',
    '/assets/outros/CafeManha.png',
    '/assets/outros/Escola.png',
    '/assets/outros/EscovarDentes.png',
    '/assets/outros/HoraAtividade.png',
    '/assets/outros/HoraBloquinhos.png',
    '/assets/outros/HoraBrincadeira.png',
    '/assets/outros/HoraHistoria.png',
    '/assets/outros/HoraMassinha.png',
    '/assets/outros/HoraPintura.png',
    '/assets/outros/Informática.png',
    '/assets/outros/Janta.png',
    '/assets/outros/JogarBola.png',
    '/assets/outros/Lanche.png',
    '/assets/outros/LavarMao.png',
    '/assets/outros/Parquinho.png',
    '/assets/outros/PentearCabelos.png',
    '/assets/outros/SalaLeitura.png',
    '/assets/outros/SecarCorpo.png',
    '/assets/outros/SecarMao.png',
    '/assets/outros/TomarBanho.png',
  ];

  constructor(
    public dialogRef: MatDialogRef<ImageSelectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  selectImage(selectedImage: string) {
    this.dialogRef.close(selectedImage);
  }
}
