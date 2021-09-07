import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  otpvalue: any;
  OtpForm: FormGroup;
	isLoading: boolean = false;
  constructor(private fb:FormBuilder,public bsModalRef: BsModalRef,private toastr:ToastrService,private service:AuthService,private router:Router) { 
    this.OtpForm = this.fb.group({
      otp:['']
    })
  }

  ngOnInit(): void {
    this.bsModalRef.content
  }
  onOtpChange(event)
  {
    this.otpvalue = event
    console.log(this.otpvalue);
}

VerifyOtp(){
  let url = `user/forgot-verify-otp/`
  let obj = {
    "email":this.service.otpEmail,
    "otp":this.otpvalue}
    this.service.putApi(url,obj).subscribe((res:any)=>{
      console.log('Verify otp',res);
      if(res.code==200){
        this.toastr.success(res.message,"Success");
				this.router.navigate(['/authentication/setpassword']);
        this.bsModalRef.hide();
      }else{
        this.toastr.error(res.message,"Failed");
      }
    }) 
}
}
