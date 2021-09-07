import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  tokens = false;

  constructor(private token: TokenStorageService, public Router: Router) { }


  canActivate(): boolean {

    this.tokens = !!this.token.getToken();
    if (!this.tokens) {
      this.Router.navigate(['login']);
      return false;
    }
    return true;
  }

}
