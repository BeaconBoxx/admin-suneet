import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../_services/common.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { CustomValidationService } from '../../../_services/custom-validation.service';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  @ViewChild("placeRef") placesRef: GooglePlaceDirective;
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  constructor(private fb: FormBuilder, private commn_: CommonService, private customvalidator: CustomValidationService) {
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
      middle_name: ['', [Validators.maxLength(10),Validators.minLength(3)]],
      last_name: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(15)]],
      country_code: [''],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      medical_information: ['', [Validators.required]],
      state: ['', [Validators.required]],
      property_access_code: ['', [Validators.required]],
      lock_box_code: ['', [Validators.required]],
      zip_code: ['', [Validators.required]],
      cnfaddress: ['']
    }, {
      validator: this.customvalidator.passwordMatchValidator("address", "cnfaddress")
    });
  }
  ngOnInit(): void {

  }

  addUser() {
    console.log(this.userForm);
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
  
  //country code

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
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
