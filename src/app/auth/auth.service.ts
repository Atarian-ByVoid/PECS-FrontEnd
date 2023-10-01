import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    const loginData = {
      email: email,
      senha: senha,
    };

    const headers = new HttpHeaders({});

    return this.http.post(`${this.baseUrl}/auth/login`, loginData, { headers: headers });
  }

  setAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }

  logout() {
    this.isAuthenticated = false;
  }
}
