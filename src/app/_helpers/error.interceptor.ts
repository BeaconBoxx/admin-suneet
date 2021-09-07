import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _noti:ToastrService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
        tap((data: any) => {
            if (data.body && data.body.code == 400) {
                this._noti.error(data.body.message,"Error!");
                return Observable.throw(data.body.message);
            } else {
                return data.body;
            }
        }),
        catchError(err => {
            if (err.status === 401) {
                this._noti.error("Not authorized","Error!");
                sessionStorage.removeItem(environment.storageKey);
                this.router.navigate(['/authentication/login']);
            }
            else {
                var error = err.error.error_description || err.error.message || err.statusText || err.message;
                this._noti.error(error,'Error!')
            }
            var error = err.error.error_description || err.error.message || err.statusText || err.message;
            return throwError(error);
        }));
}
}
