import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { }

  login(formData: any) {
		return this._http.post<any>(`${environment.baseUrl}login/`, formData)
			.pipe(map((data : any) => {
				// login successful if there's a jwt token in the response
				if (data) {
					sessionStorage.setItem(environment.storageKey, JSON.stringify(data.data.token));
				}
				return data;
			}));
	}

}
