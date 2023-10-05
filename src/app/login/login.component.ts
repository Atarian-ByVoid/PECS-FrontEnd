import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ErrorService } from '../error-popup/error-popup.service';

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

  constructor(private authService: AuthService, private errorService: ErrorService, private router: Router) { }

  onLoginSubmit() {
    this.authService.login(this.email, this.senha).subscribe(
      (response) => {
        if (response) {

          this.router.navigate(['/home'])
        }
      },
      (error) => {
        this.errorService.openErrorDialog({ message: 'Verifique suas credencias e tente novamente' });
      }
    );
  }

}
