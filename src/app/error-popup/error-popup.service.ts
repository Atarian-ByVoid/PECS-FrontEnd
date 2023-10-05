import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorPopupComponent } from './error-popup.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private dialog: MatDialog) { }

  openErrorDialog(data: { message: string }): void {
    this.dialog.open(ErrorPopupComponent, {
      width: '250px',
      data: data,
    });
  }
}
