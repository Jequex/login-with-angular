import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string, email: string): Observable <any> {
    return this.http.post(AUTH_API + 'auth', {
      username, email, password
    }, httpOptions);
  }

  register(username: string, password: string, email: string, fullname: string): Observable <any> {
    return this.http.post(AUTH_API + 'user', {
      username, email, password, fullname
    }, httpOptions);
  }
}
