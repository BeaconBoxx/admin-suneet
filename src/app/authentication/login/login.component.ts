import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OtpComponent } from '../../_shared/otp/otp.component';
import { ToastrService } from 'ngx-toastr';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  forgotPassword: FormGroup;
  bsModalRef: BsModalRef;
  constructor(public router: Router,private _auth: AuthService,private toastr:ToastrService,private _fb:FormBuilder,private spinner: NgxSpinnerService,private modalService: BsModalService) {
    this.loginForm = this._fb.group({
			email: [null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
			password: [null, Validators.required],
      rememberMe: [""]
		});
    this.forgotPassword = this._fb.group({
			email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
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

  forgotNow() {
		if (this.forgotPassword.valid) {
			if (this.forgotPassword.controls.email.value) {
				this.forgotPassword.controls.email.setValue(this.forgotPassword.controls.email.value.trim());
			}
			this._auth.forgot(this.forgotPassword.value).subscribe(res => {
        if(res.code==200)
        {
          this.bsModalRef=this.modalService.show(OtpComponent);
          this.toastr.success(res.message,"Success");
        }
        else
        {
          this.toastr.error(res.message,"Error");
        }
			}, error=> {
        this.toastr.error(error.message,"Error");
			})
		} else {
			this.forgotPassword.markAllAsTouched();
		}
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
			let body={email:this.loginForm.get('email').value,password:this.loginForm.get('password').value};
			this._auth.login(body).subscribe(res => {
        console.log(res);
        if(res.code==200)
        {
          setTimeout(()=>{this.spinner.hide();},1500);
				this.router.navigate(['/dashboard/dashboard']);
        }
        else
        {
          this.toastr.error(res.message,"Error");
          this.spinner.hide();
        }
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
