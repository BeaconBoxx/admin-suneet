import { CommonService } from './../../../_services/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomValidationService } from '../../../_services/custom-validation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild("placeRef") placesRef: GooglePlaceDirective;
  active = 1;
  items: any;
  long: any=76.71787259999999;
  lati: any=30.7046486 ;
  zoom=14;
  autoAddress: any;
  profileForm:FormGroup;
  passwordForm:FormGroup;
  Pic: any;
  imageId: any;
  constructor(private commn_:CommonService,private fb:FormBuilder,private toastr:ToastrService,private customvalidator:CustomValidationService) { 
    this.profileForm=this.fb.group({
      first_name:['',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
      last_name:['',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
      phone_no:['',[Validators.required,Validators.minLength(7),Validators.maxLength(15)]],
      email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      address:['',[Validators.required]],
      cnfaddress:['',[Validators.required]]
    },{
      validator:this.customvalidator.passwordMatchValidator("address","cnfaddress")
     });
    this.passwordForm=this.fb.group({
      current_password:['',[Validators.required,Validators.minLength(8)]],
      new_password:['',[Validators.required,Validators.minLength(8)]],
      cnfnew_password:['',[Validators.required]]
    },{
      validator:this.customvalidator.passwordMatchValidator("new_password","cnfnew_password")
     });
  }

  ngOnInit(): void {
    this.getProfile();
  }
 
  getProfile(){
    this.commn_.get("user/get-user-profile-by-token/").subscribe(res=>{
    console.log(res);
    this.items=res?.data;
    this.lati=res?.data?.latitude;
    this.long=res?.data?.longitude;
    console.log(this.lati,this.long);
    this.profileForm.get('first_name').patchValue(res?.data?.first_name);
    this.profileForm.get('last_name').patchValue(res?.data?.last_name);
    this.profileForm.get('address').patchValue(res?.data?.address);
    this.profileForm.get('cnfaddress').patchValue(res?.data?.address);
    this.profileForm.get('phone_no').patchValue(res?.data?.phone_no);
    this.profileForm.get('email').patchValue(res?.data?.email);
    this.profileForm.get('email').disable();
    this.profileForm.get('phone_no').disable();
    });
  }
  //setting Form
  update()
  {
    let body={
    "first_name":this.profileForm.get('first_name').value.trim(),
    "last_name":this.profileForm.get('last_name').value.trim(),
    "address":this.profileForm.get('address').value.trim(),
    "latitude":this.lati,
    "longitude":this.long,
    "role":1
    };
    if(this.imageId)
    {
      body['image']=this.imageId;
    }
    console.log(body);
    if(this.profileForm.valid){
    this.commn_.put("user/update-user-profile-by-token/",body).subscribe(res=>{
      if(res.code==200)
      {
      this.commn_.imageFlag.next("Flag");
      this.toastr.success(res.message,"Success",{timeOut:1500});
      this.getProfile();
      }
      else{
        this.toastr.error(res.message,"Error",{timeOut:1500});
      }
    })
  }
  else{
    this.profileForm.markAllAsTouched();
  }

  }
   
  //Image Select
  onImageSelect(e) {
    var files = e.target.files;
    if (files[0].size <= 10000000) {
      this.Pic = files[0];
      const formdata = new FormData();
      formdata.append("media",this.Pic);
      this.commn_.post("upload/media/",formdata).subscribe(res=>{
        console.log(res);
      if(res.code==200)
      {
        this.imageId=res.data[0].id;
        this.update();
        this.getProfile();
      }
      else
      {
        this.toastr.error(res.message,"Error");
      }
      });
    } else {
      this.Pic = null;
    }
  }

  //change-password
  updatePassword()
  {
    let body={
      "current_password":this.passwordForm.get('current_password').value,
      "new_password":this.passwordForm.get('new_password').value
  };
  console.log(body);
  if(this.passwordForm.valid){
    this.commn_.put("user/change-password/",body).subscribe(res=>{
      if(res.code==200)
      {
        this.toastr.success(res.message,"Success",{timeOut:2000});
      }
      else
      {
        this.toastr.error(res.message,"Error",{timeOut:2000});
      }
    })
  }
  else
  {
    this.passwordForm.markAllAsTouched();
  }
  }

   //Location Dropdown
   public AddressChange(address: any) {
    this.profileForm.get('cnfaddress').patchValue(address.formatted_address);
    this.profileForm.get('address').patchValue(address.formatted_address);
    this.lati = address.geometry.location.lat();
    this.long = address.geometry.location.lng();
  }
  
   // Alphabatic text only
   alphabate(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122) ||
      charCode == 32
    ) {
      return true;
    }
    return false;
  }
 
  // Allow Numberic input only
  phoneNoInput(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode == 43) {
      return true;
    }
    return false;
  }

}
