import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../_services/common.service';
import { CustomValidationService } from '../../../_services/custom-validation.service';
import * as moment from 'moment';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  @ViewChild("placeRef") placesRef: GooglePlaceDirective;
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  Pic: any;
  imageId: any;
  text: any = "Choose file";
  userId: any;
  
  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  constructor(private fb: FormBuilder, public router: Router, private commn_: CommonService, private customvalidator: CustomValidationService, private toastr: ToastrService,private route: ActivatedRoute) {
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
      middle_name: ['', [Validators.maxLength(10), Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
      last_name: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      fullPhone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      medical_information: ['', [Validators.required]],
      state: ['', [Validators.required]],
      property_access_code: ['', [Validators.required]],
      lock_box_code: ['', [Validators.required]],
      zip_code: ['', [Validators.required]],
      cnfaddress: [''],
      phone: [''],
      country_code: ['']
    }, {
      validator: this.customvalidator.passwordMatchValidator("address", "cnfaddress")
    });
    this.userForm.get('fullPhone')?.valueChanges.subscribe(x => {
      if (this.userForm.get('fullPhone')?.value) {
        this.userForm.get('phone')?.setValue(this.userForm.get('fullPhone')?.value.number);
        this.userForm.get('country_code')?.setValue(this.userForm.get('fullPhone')?.value.dialCode);
      }
    });
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userId= params.id;
      this.getUserById();
    });
  }
  
  addUser() {
    console.log(this.userForm);
    let body = {
      "first_name": this.userForm.get('first_name').value,
      "last_name": this.userForm.get('last_name').value,
      "dob": this.userForm.get('dob').value,
      "email": this.userForm.get('email').value,
      "phone_no": this.userForm.get('fullPhone')?.value.number,
      "country_code": this.userForm.get('fullPhone')?.value.dialCode,
      "address": this.userForm.get('address').value,
      "city": this.userForm.get('city').value,
      "state": this.userForm.get('state').value,
      "property_access_code": this.userForm.get('property_access_code').value,
      "lock_box_code": this.userForm.get('lock_box_code').value,
      "medical_information": this.userForm.get('medical_information').value,
      "gender": this.userForm.get('gender').value,
      "zip_code": this.userForm.get('zip_code').value,
    }
    if (this.userForm.get('middle_name').value) {
      body['middle_name'] = this.userForm.get('middle_name').value
    }
    if (this.imageId) {
      body['image'] = this.imageId;
    }

    if (this.userForm.valid) {
      if (this.imageId) {
        this.commn_.put("admin/update-user-details-by-id/"+this.userId+"/", body).subscribe(res => {
          if (res.code == 200) {
            this.router.navigate(["users/userlist"]);
            this.toastr.success(res.message, "Success");
          }
          else {
            this.toastr.error(res.message, "Error");
          }
        })
      }
      else {
        this.toastr.error("Select Image", "Error");
      }
    }
    else {
      this.userForm.markAllAsTouched();
    }

  }

  //Image Select
  onImageSelect(e) {
    var files = e.target.files;
    if (files[0].size <= 10000000) {
      this.Pic = files[0];
      this.text = e.target.files[0].name;
      const formdata = new FormData();
      formdata.append("media", this.Pic);
      this.commn_.post("upload/media/", formdata).subscribe(res => {
        console.log(res);
        if (res.code == 200) {
          this.imageId = res.data[0].id;
        }
        else {
          this.toastr.error(res.message, "Error");
        }
      });
    } else {
      this.Pic = null;
    }
  }
  
  //get User By Id
  
  getUserById()
  {
    this.commn_.get("admin/get-user-details-by-id/"+this.userId+"/").subscribe(res=>{
      console.log(res);
       this.userForm.get('first_name').patchValue(res?.data?.first_name);
      this.userForm.get('last_name').patchValue(res?.data?.last_name);
      this.userForm.get('dob').patchValue(moment(res?.data?.dob).format('YYYY-MM-DD'));
      this.userForm.get('email').patchValue(res?.data?.email);
      this.userForm.get('country_code')?.patchValue(res?.data?.country_code);
      this.userForm.get('fullPhone')?.patchValue({number:res?.data?.phone_no,dialCode:res?.data?.country_code});
      this.userForm.get('phone')?.patchValue(res?.data?.phone_no);
      this.userForm.get('address').patchValue(res?.data?.address);
      this.userForm.get('cnfaddress').patchValue(res?.data?.address);
      this.userForm.get('city').patchValue(res?.data?.city);
      this.userForm.get('state').patchValue(res?.data?.state);
      this.userForm.get('property_access_code').patchValue(res?.data?.property_access_code);
      this.userForm.get('lock_box_code').patchValue(res?.data?.lock_box_code);
      this.userForm.get('medical_information').patchValue(res?.data?.medical_information);
      this.userForm.get('gender').patchValue(res?.data?.gender);
      this.userForm.get('zip_code').patchValue(res?.data?.zip_code);
      this.imageId=res?.data?.image?.id;
      this.text=res?.data?.image?.media_file_name;
    })
  }

  //Location Dropdown
  public AddressChange(address: any) {
    this.userForm.get('cnfaddress').patchValue(address.formatted_address);
    this.userForm.get('address').patchValue(address.formatted_address);
    address.address_components.forEach((res) => {
      console.log(res);
      if (
        res.types.includes("locality") ||
        res.types.includes("postal_town") ||
        res.types.includes("sublocality") ||
        res.types.includes("sublocality_level_1") ||
        res.types.includes("sublocality_level_2") ||
        res.types.includes("sublocality_level_3") ||
        res.types.includes("sublocality_level_4") ||
        res.types.includes("sublocality_level_5")
      ) {
        this.userForm.controls["city"].patchValue(res.long_name);
      }
      if (
        res.types.includes("administrative_area_level_1") ||
        res.types.includes("administrative_area_level_2") ||
        res.types.includes("administrative_area_level_3") ||
        res.types.includes("administrative_area_level_4") ||
        res.types.includes("administrative_area_level_5")
      ) {
        this.userForm.controls["state"].patchValue(res.long_name);
      }
      if (res.types.includes("postal_code")) {
        this.userForm.controls["zip_code"].patchValue(res.long_name);
      }
    });
  }

  // Alphabatic text only
  public Alphabet(event) {
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
