import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { User } from '../models/User';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  form: User = {
    username: '',
    fullname: '',
    email: '',
    password: '',
    password2: ''
  };
  isLoading = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;

  constructor(private authService: AuthService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.tokenStorageService.saveToken(data.token);
        this.isLoggedIn = true;
        this.isLoading = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.isLoading = false;
      }
    )
  }

}
