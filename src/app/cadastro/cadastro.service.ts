import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: any): Observable<any> {
    const url = `${this.apiUrl}/auth`;

    return this.http.post(url, usuario);
  }
}
