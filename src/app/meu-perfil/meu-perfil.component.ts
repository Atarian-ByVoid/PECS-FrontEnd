import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MeuPerfilService } from './meu-perfil.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css'],
})
export class MeuPerfilComponent implements OnInit {
  constructor(
    private perfil: MeuPerfilService,
    private authService: AuthService
  ) {}
  userInfo: any = null;
  user: any;
  editing: boolean = false;

  ngOnInit() {
    const userId = this.authService.getUserId();

    if (userId !== null) {
      this.perfil.getUserProfile(userId).subscribe((data) => {
        console.log('Dados recebidos do servidor:', data);

        this.userInfo = data;
      });
    }
  }
  toggleEditing() {
    this.editing = !this.editing;
  }
  isEditableField(key: string): boolean {
    return key === 'nome' || key === 'telefone' || key === 'email';
  }
  shouldDisplayField(key: string): boolean {
    return key === 'nome' || key === 'telefone' || key === 'email';
  }

  saveChanges() {
    const userId = this.authService.getUserId();
    if (userId !== null) {
      this.perfil.updateUserProfile(userId, this.userInfo).subscribe(() => {
        this.editing = false;
      });
    } else {
      console.error('ID do usuário é nulo ao tentar salvar as alterações.');
    }
  }
}
