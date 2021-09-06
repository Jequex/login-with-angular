import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn = false;
  user = '';

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.userService.getPrivateContent().subscribe(
      data => {
        this.tokenStorageService.saveUser(data.data[0].full_name);
        this.user = this.tokenStorageService.getUser();
      },
      err => {console.log(err)}
    )
  }

}
