import { CustomValidationService } from './../../_services/custom-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {
  newPassword: FormGroup;
	isLoading: boolean = false;
  constructor(public router: Router, private _auth: AuthService,private toastr:ToastrService, private _fb: FormBuilder,private customvalidator:CustomValidationService) { 
    this.newPassword = this._fb.group({
	  password: [null, [Validators.required,Validators.minLength(8)]],
      Cnfpassword:['']
		},{
      validator:this.customvalidator.passwordMatchValidator("password","Cnfpassword")
     })
  }

  ngOnInit(): void {
  }
  
  forgotNow() {
    let url = `user/update-password/`
    let obj = {
      "email":this._auth.otpEmail,
      "password":this.newPassword.controls.password.value
  }
		if (this.newPassword.valid) {
			if (this.newPassword.controls.password.value) {
				this.newPassword.controls.password.setValue(this.newPassword.controls.password.value.trim());
			}
  	this.isLoading = true;
			this._auth.putApi(url,obj).subscribe((res:any) => {
				this.isLoading = false;
				this.toastr.success(res.message,"Success");
				this.router.navigate(['/authentication/login']);
			}, _ => {
				this.isLoading = false;
			})
		} else {
			this.newPassword.markAllAsTouched();
		}
	}

}
