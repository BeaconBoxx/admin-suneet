import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let userInfo = sessionStorage.getItem(environment.storageKey);
    if(userInfo != null) {
        return true;
    } else {
      this.router.navigate(['/authentication/login']);
    }
  }
}
