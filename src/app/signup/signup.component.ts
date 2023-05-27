import { Component } from '@angular/core';
import { User, UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = new User();
  confirmPassword!: string;
  differentPasswords: boolean = false;
  emptyField: boolean = false;
  constructor(public userService: UserService, public router: Router){}

  navigateToMainpage(){
    this.router.navigate(["/"]);
  }

  register(user: User){
    if(this.confirmPassword == null || this.user.login == null || this.user.password == null){
      this.emptyField = true;
    } else{
      this.emptyField = false;
      if(this.confirmPassword == this.user.password){
        this.userService.register(user).subscribe();
        this.router.navigate(['/logowanie']);
      } else {
        this.differentPasswords = true;
      }
    } 
  }

}
