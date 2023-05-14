import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();
  anyErrors: boolean = false;

  constructor(private userService: UserService, private router: Router){

  }
 
  // getCredentials(): void{
  //   console.log(this.user.login);
  //   console.log(this.user.password);
  // }

  async userLogin() {
    try {
      const result = await lastValueFrom(this.userService.loginUser(this.user));

      const payload = result.token.split('.')[1];
      const base64 = atob(payload);
      const tokenObject = JSON.parse(base64);

      localStorage.setItem('token', result.token);
      localStorage.setItem('login', tokenObject.iss);
        this.router.navigate(["/zadania"]);

    } catch {
      this.anyErrors = true;
    }
  }

}


