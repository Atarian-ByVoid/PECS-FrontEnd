import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css'],
})
export class ImageSelectorComponent {
  imageOptionsA: string[] = [
    '/assets/img1.jpg',
    '/assets/img1.jpg',
    '/assets/img1.jpg',
  ];

  imageOptionsB: string[] = [
    '/assets/img1.jpg',
    '/assets/img1.jpg',
    '/assets/img1.jpg',
  ];

  constructor(
    public dialogRef: MatDialogRef<ImageSelectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  selectImage(selectedImage: string) {
    this.dialogRef.close(selectedImage);
  }
}
