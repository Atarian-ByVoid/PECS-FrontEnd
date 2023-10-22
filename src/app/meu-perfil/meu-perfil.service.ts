import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MeuPerfilService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserProfile(id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getUserId()}`,
    });

    return this.http.get(`${this.baseUrl}/usuario/${id}`, { headers: headers });
  }

  updateUserProfile(id: string, userData: any): Observable<any> {
    const url = `${this.baseUrl}/usuario/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getUserId()}`,
    });
    return this.http.put(url, userData, { headers: headers });
  }
}
