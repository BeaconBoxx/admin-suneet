import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  constructor(public router: Router,private _auth: AuthService,private _fb:FormBuilder,private spinner: NgxSpinnerService) {
    this.loginForm = this._fb.group({
			email: [null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
			password: [null, Validators.required],
      rememberMe: [""]
		})
  }

  ngOnInit() {
    this.clickbtn();
    if (localStorage.getItem("remember")) {
      let formData = JSON.parse(localStorage.getItem("remember"));
      this.loginForm.patchValue({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });
    }
  }

  ngAfterViewInit() {
    $(function() {
            $(".preloader").fadeOut();
        });
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
  }



  onLoggedin() {
    this.spinner.show();
    if (this.loginForm.controls.email.value) {
			this.loginForm.controls.email.setValue(this.loginForm.controls.email.value.trim());
		}
    if (this.loginForm.value.rememberMe) {
      localStorage.setItem("remember",JSON.stringify(this.loginForm.value));
    } else {
      localStorage.removeItem("remember");
    }
		if (this.loginForm.valid) {
			let body=this.loginForm.value;
			this._auth.login(body).subscribe(res => {
        setTimeout(()=>{this.spinner.hide();},1500);
				this.router.navigate(['/dashboard/dashboard']);
      }, error => {
        setTimeout(()=>{this.spinner.hide();},1500);
			})
		} else {
			this.loginForm.markAllAsTouched();
      this.spinner.hide();
		}
  }
clickbtn(){
  var forgetpws = document.getElementById("to-recover"); 
  var recoverform = document.getElementById("recoverform"); 
  var login = document.getElementById("loginform"); 
  var resetpw = document.getElementById("resetpwd"); 
 
  forgetpws.addEventListener("click" ,()=>{
    recoverform.classList.add("d-block");
    login.classList.add('d-none');
    login.classList.remove('d-block');
  })
  resetpw.addEventListener("click" ,()=>{
    recoverform.classList.remove("d-block")
    recoverform.classList.add("d-none");
    login.classList.add('d-block');
  })
}



}
