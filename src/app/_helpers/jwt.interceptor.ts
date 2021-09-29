import { Injectable } from "@angular/core";
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private spinner:NgxSpinnerService){ }
  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    this.spinner.show();
    let token = JSON.parse(sessionStorage.getItem(environment.storageKey));
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    setTimeout(() => {this.spinner.hide();},1000);
    return next.handle(request);
  }
}
