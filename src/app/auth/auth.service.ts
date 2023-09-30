import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  isAuthenticated: boolean = false;
  constructor(private http: HttpClient) { }

  login(email: string, senha: string) {
    const loginData = {
      email: email,
      senha: senha,
    };

    const headers = new HttpHeaders({
    });

    return this.http.post(`${this.baseUrl}/auth/login`, loginData, { headers: headers });
  }
}
