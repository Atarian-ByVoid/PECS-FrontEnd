import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageSelectorComponent } from '../image-selector/image-selector.component';

@Component({
  selector: 'app-tela-interativa',
  templateUrl: './tela-interativa.component.html',
  styleUrls: ['./tela-interativa.component.css'],
})
export class TelaInterativaComponent {
  constructor(private dialog: MatDialog) {}

  tableDataTeste: string = '';
  tableData1: string = '';
  tableData2: string = '';

  diaEstado: { src: string }[] = [
    { src: 'assets/tela_interativa/dia-estado/Chuvoso.png' },
    { src: 'assets/tela_interativa/dia-estado/Nublado.png' },
    { src: 'assets/tela_interativa/dia-estado/Ensolarado.png' },
  ];

  diaSemana: { src: string }[] = [
    { src: 'assets/tela_interativa/dia-semana/Domingo.png' },
    { src: 'assets/tela_interativa/dia-semana/Segunda.png' },
    { src: 'assets/tela_interativa/dia-semana/Terca.png' },
    { src: 'assets/tela_interativa/dia-semana/Quarta.png' },
    { src: 'assets/tela_interativa/dia-semana/Quinta.png' },
    { src: 'assets/tela_interativa/dia-semana/Sexta.png' },
    { src: 'assets/tela_interativa/dia-semana/Sabado.png' },
  ];

  openImageSelector(imageNumber: number) {
    const dialogRef = this.dialog.open(ImageSelectorComponent, {
      data: {
        selectedImage: imageNumber === 1 ? this.tableData1 : this.tableData2,
      },
    });

    dialogRef.afterClosed().subscribe((selectedImage: string) => {
      if (selectedImage) {
        if (imageNumber === 1) {
          this.tableData1 = selectedImage;
        } else if (imageNumber === 2) {
          this.tableData2 = selectedImage;
        }
      }
    });
  }

  onDrop(event: CdkDragDrop<string[]>, imageNumber: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (imageNumber === 1) {
        this.tableData1 = this.tableData2;
        this.tableData2 = event.item.data;
      } else if (imageNumber === 2) {
        this.tableData2 = this.tableData1;
        this.tableData1 = event.item.data;
      }
    }
  }
}
