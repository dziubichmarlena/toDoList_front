import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<AuthResult> {
    return this.http.post<AuthResult>(`${this.baseUrl}/login`, user);
  }

  register(user: User): Observable<any> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }

}


export class User {
  id!: number;
  login!: string;
  password!: string;
}

export class AuthResult {
  token!: string;
}