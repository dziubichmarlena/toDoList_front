import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate{

  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
      
      const token = localStorage.getItem('token');
      if (token) {
        return true;
      }
  
      this.router.navigate([ '/logowanie' ]);
      return false;
    }
  }
