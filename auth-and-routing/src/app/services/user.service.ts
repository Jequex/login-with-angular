import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:5000/';

@Injectable({
  providedIn: 'root'
})
  
export class UserService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  token = this.tokenStorage.getToken();

  getPrivateContent(): Observable<any> {
    return this.http.get(API_URL + 'auth');
  }
}
