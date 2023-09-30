import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {

  rotina: any[] = ['/assets/sunset.png', '/assets/night.png', '/assets/morning.png'];

  listTest: any[] = [];
  list: any[] = ['/assets/img1.jpg', '/assets/img1.jpg', '/assets/img1.jpg'];
  list2: any[] = ['/assets/img5.jpg', '/assets/img5.jpg', '/assets/img5.jpg'];
  list3: any[] = ['/assets/img7.jpg', '/assets/img7.jpg', '/assets/img7.jpg'];

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      this.listTest.push(imageUrl);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


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

