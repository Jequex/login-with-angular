import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Form = {
  username: string,
  password: string,
  email: string,
  fullname: string
}

const AUTH_API = 'http://localhost:5000/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(form: Form): Observable <any> {
    return this.http.post(AUTH_API + 'auth',  form );
  }

  register(form: Form): Observable<any> {
    return this.http.post(AUTH_API + 'user',  form );
  }
}
