import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.css']
})
export class TodopageComponent {

  constructor(private router: Router){}


  logout() : void{
    localStorage.clear();
    this.router.navigate(['/logowanie']);
  }

}
