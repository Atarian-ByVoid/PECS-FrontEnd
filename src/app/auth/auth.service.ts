import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  private token: string | null = null;
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    const loginData = {
      email: email,
      senha: senha,
    };

    const headers = new HttpHeaders({});

    return this.http.post(`${this.baseUrl}/auth/login`, loginData, { headers: headers }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        this.isAuthenticated = true;
        this.token = response.token;
      })
    );
  }

  isAuthenticatedUser(): boolean {
    return !!this.token;
  }

  getUserId(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.id;
    } else {
      console.error('Token JWT não encontrado no Local Storage.');
      return null;
    }
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }
}
