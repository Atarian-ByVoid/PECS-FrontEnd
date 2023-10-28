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
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
    'Domingo',
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

  // rotina: any[] = ['/assets/morning.png', '/assets/sunset.png', '/assets/night.png',];
  // list: any[] = ['/assets/img1.jpg', '/assets/img1.jpg', '/assets/img1.jpg'];
  // list2: any[] = ['/assets/img5.jpg', '/assets/img5.jpg', '/assets/img5.jpg'];
  // list3: any[] = ['/assets/img7.jpg', '/assets/img7.jpg', '/assets/img7.jpg'];
  // showFrame1 = true;
  // images: string[] = [];
  // getImageLabel(url: string): string {
  //   if (url === '/assets/morning.png') {
  //     return 'Manhã';
  //   } else if (url === '/assets/sunset.png') {
  //     return 'Tarde';
  //   } else if (url === '/assets/night.png') {
  //     return 'Noite';
  //   }
  //   return '';
  // }
  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }

  // toggleFrame() {
  //   this.showFrame1 = !this.showFrame1;
  // }
  // openMenu() {
  //   document.querySelector('.menu')?.classList.add('open');
  // }
  // closeMenu() {
  //   document.querySelector('.menu')?.classList.remove('open');
  // }
  // rows: number[] = [1, 2, 3];
  // columns: number[] = [1, 2, 3, 4, 5];
  // images: string[][] = [];
  // getImageUrl(row: number, column: number): string {
  //   if (this.images[row] && this.images[row][column]) {
  //     return this.images[row][column];
  //   } else {
  //     return 'placeholder.jpg';
  //   }
  // }
  // selectImage(row: number, column: number): void {
  //   const imageUrl = prompt('Insira a URL da imagem:');
  //   if (imageUrl) {
  //     if (!this.images[row]) {
  //       this.images[row] = [];
  //     }
  //     this.images[row][column] = imageUrl;
  //   }
  // }
  // selectImage(rotina: number): void {
  //   const imageUrl = prompt('Insira a URL da imagem:');
  //   if (imageUrl) {
  //     if (!this.images[rotina]) {
  //       this.images[rotina]
  //     }
  //     this.images[rotina] = imageUrl;
  //   }
  // }
  // listDiv2: any[] = ['/assets/img3.jpg', '/assets/img3.jpg', '/assets/img3.jpg'];
  // listDiv3: any[] = ['/assets/img2.jpg', '/assets/img2.jpg', '/assets/img2.jpg'];
  // listDiv4: any[] = ['assets/img6.jpg', 'assets/img6.jpg', 'assets/img6.jpg'];
  // imagens: string[][] = [
  //   ['/assets/teste.jpg', '/assets/img2.jpg', '/assets/img1.jpg', '/assets/img4.jpg', '/assets/img5.jpg'],
  //   ['/assets/img7.jpg', '/assets/img3.jpg', '/assets/img7.jpg', '/assets/img7.jpg', '/assets/teste.jpg'],
  //   ['/assets/img7.jpg', '/assets/img7.jpg', '/assets/img1.jpg', '/assets/img5.jpg', '/assets/img1.jpg'],
  // ];
  // onDrop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     if (event.currentIndex !== event.previousIndex) {
  //       moveItemInArray(
  //         event.container.data,
  //         event.previousIndex,
  //         event.currentIndex
  //       );
  //     }
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }
}
