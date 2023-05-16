import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskspage',
  templateUrl: './taskspage.component.html',
  styleUrls: ['./taskspage.component.css']
})
export class TaskspageComponent {
  constructor(private router: Router){}


  logout() : void{
    localStorage.clear();
    this.router.navigate(['/logowanie']);
  }


}
