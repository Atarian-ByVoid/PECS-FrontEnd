import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import { ImageSelectorComponent } from '../material/image-selector/image-selector.component';
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent {
  constructor(private dialog: MatDialog) {}

  staticImages: string[] = [
    '/assets/morning.png',
    '/assets/sunset.png',
    '/assets/night.png',
  ];

  tableData: string[][][] = [
    [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ],
    [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ],
    [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ],
    [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ],
    [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ],
    [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ],
    [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ],
  ];

  daysOfWeek: string[] = [
    'SEGUNDA-FEIRA',
    'TERÇA-FEIRA',
    'QUARTA-FEIRA',
    'QUINTA-FEIRA',
    'SEXTA-FEIRA',
    'SÁBADO',
    'DOMINGO',
  ];
  selectedDayIndex: number = 0;
  day: string = this.daysOfWeek[this.selectedDayIndex];

  selectDay(index: number) {
    this.selectedDayIndex = index;
    this.day = this.daysOfWeek[index];
  }
  openImageSelector(row: number, cell: number) {
    if (!this.tableData[this.selectedDayIndex][row][cell]) {
      const dialogRef = this.dialog.open(ImageSelectorComponent, {
        data: { selectedRow: row, selectedCell: cell },
      });

      dialogRef.afterClosed().subscribe((selectedImage: string) => {
        if (selectedImage) {
          this.tableData[this.selectedDayIndex][row][cell] = selectedImage;
        }
      });
    }
  }

  chooseImage(row: number, cell: number) {
    if (!this.tableData[row][cell]) {
      this.openImageSelector(row, cell);
    }
  }

  @ViewChild('captureElement') captureElement!: ElementRef;
  captureAndDownload() {
    const elementToCapture = this.captureElement.nativeElement;
    html2canvas(elementToCapture).then((canvas: HTMLCanvasElement) => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'rotina.png';
      link.click();
    });
  }
  showFrame1 = true;

  toggleFrame() {
    this.showFrame1 = !this.showFrame1;
  }
}
