import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CartGuardService implements CanActivate {

  constructor( private userService:UserService , private router:Router) { }

  canActivate():boolean {
    if (!this.userService.isLogged('user')) {
      this.router.navigate(['login']);
    }
    return true;
  }
}
