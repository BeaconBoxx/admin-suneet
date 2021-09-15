import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
      let userInfo = sessionStorage.getItem(environment.storageKey);
      if ((userInfo == null)) {
          return true;
      } else {
          this.router.navigate(['/dashboard/dashboard']);
          // Notify.info('Please login to continue.');
      }
  }
  
}
