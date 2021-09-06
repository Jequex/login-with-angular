import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  isLoading = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void{
    this.isLoading = true;

    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoading = false;
        this.isLoggedIn = true;
        this.isLoginFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.isLoading = false;

      }
    )
  }
}
