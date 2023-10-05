import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.css']
})
export class ErrorPopupComponent {
  errorMessage: string | undefined;
  constructor(
    public dialogRef: MatDialogRef<ErrorPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {
    this.closeAfterTimeout();
  }

  closeAfterTimeout() {
    setTimeout(() => {
      this.dialogRef.close();
    }, 5000);
  }



}
