import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  form: any = {
    username: null,
    fullname: null,
    email: null,
    password: null
  };
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
    const { username, email, password, fullname } = this.form;
    this.authService.register(username, password, email, fullname).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.tokenStorageService.saveToken(data.token);
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    )
  }

  
  reloadPage(): void{
    window.location.reload();
  }

}
