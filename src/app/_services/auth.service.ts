import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	otpEmail:any="";
  constructor(private _http : HttpClient) { }

  login(formData: any) {
		return this._http.post<any>(`${environment.baseUrl}auth/admin/login/`, formData)
			.pipe(map((data : any) => {
				// login successful if there's a jwt token in the response
				if (data?.data?.token) {
					sessionStorage.setItem(environment.storageKey, JSON.stringify(data.data.token));
				}
				return data;
			}));
	}

	forgot(formData) {
		console.log(formData);
		this.otpEmail=formData.email;
		return this._http.put<any>(`${environment.baseUrl}user/forgot-password/`, formData)
			.pipe(map((data : any) => {	
				return data;
			}));
	}

	postApi(url,data)
	{
	  return this._http.post(`${environment.baseUrl}`+url,data);
	}
	putApi(url,data)
	{
	  return this._http.put(`${environment.baseUrl}`+url,data);
	}
	getApi(url)
    {
      return this._http.get(`${environment.baseUrl}`+url);
    }

}
