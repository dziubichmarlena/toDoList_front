import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NotificationdialogComponent } from '../notificationdialog/notificationdialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();
  anyErrors: boolean = false;

  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) {
  }

  async userLogin() {
    try {
      const result = await lastValueFrom(this.userService.loginUser(this.user));

      const payload = result.token.split('.')[1];
      const base64 = atob(payload);
      const tokenObject = JSON.parse(base64);

      localStorage.setItem('token', result.token);
      localStorage.setItem('login', tokenObject.iss);
      this.router.navigate(["/zadania"]);
      const timeout = 1500;
      const dialogRef = this.dialog.open(NotificationdialogComponent, {
        width: '350px',
        height: '100px',
        data: {}
      });

      dialogRef.afterOpened().subscribe(_ => {
        setTimeout(() => {
          dialogRef.close();
        }, timeout)
      })

    } catch {
      this.anyErrors = true;
    }
  }

  navigateToMainpage() {
    this.router.navigate(["/"]);
  }

}


