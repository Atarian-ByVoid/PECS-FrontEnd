import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ErrorPopupComponent } from '../error-popup/error-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  imagemUrl: string = '/assets/img7.jpg';
  email!: string;
  senha!: string;
  showError = false;

  constructor(private authService: AuthService, private dialog: MatDialog, private router: Router) { }

  onLoginSubmit() {
    this.authService.login(this.email, this.senha).subscribe(
      (response) => {
        if (response) {

          this.router.navigate(['/home'])
        }
      },
      (error) => {
        this.openErrorPopup();
      }
    );
  }

  openErrorPopup() {
    this.dialog.open(ErrorPopupComponent, {
      width: '300px',
      data: {
        errorMessage: 'Erro no login. Por favor, verifique suas credenciais.'
      }
    });


  }
}
