import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import Swal from "sweetalert2";
import { CommonService } from '../../../_services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contact: any;
  email:any;
  address:any;
  submitted: boolean = false;
  ContactFlag: any;

  constructor(
    private route: ActivatedRoute,
    private _route: Router,
    private http: CommonService,
    private formBuilder: FormBuilder,
    private toastr:ToastrService
  ) {
    this.contactForm = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      contact: ["",[Validators.required,Validators.minLength(8),Validators.maxLength(14)]],
      address: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(550)]]
    });
  }

  ngOnInit(): void {
    this.getData();
  }
  
   //Location Dropdown
   public AddressChange(address: any) {
    this.contactForm.get('address').patchValue(address.formatted_address);
    this.address=address.formatted_address;
  }

  getData() {
    this.http.get('cms/get-cms/').subscribe((res: any) => {
      if (res.code == 200) {
        this.email = res.data.email;
        this.contact = res.data.contact;
        this.address = res.data.address;
        this.contactForm.controls["contact"].setValue(this.contact);
        this.contactForm.controls["email"].setValue(this.email);
        this.contactForm.controls["address"].setValue(this.address);
      }
    });
  }

  update() {
    this.submitted = true;
    if (this.contactForm.valid) {
      const body = {
          email: this.contactForm.controls["email"].value,
          contact: this.contactForm.controls["contact"].value,
          address: this.address,
      };
      if (!this.address){
        body.address = this.contactForm.controls["address"].value
      }
      console.log(body);
      // return
      this.http.post('cms/create-update-cms/',body).subscribe((res: any) => {
        if (res.code == 200) {
          this.submitted = false;
          this.toastr.success("Details updated successfully");
          // this.toastr.success(res.message,'Success');
          this.getData();
          // this.Srvc.searchdata();
        } else {
          Swal.fire("Oops", res.message, "error");
        }
      });
    }
  }

  phoneNoInput(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode == 43) {
      return true;
    }
    return false;
  }

  public errorHandling = (control: string, error: string) => {
    return this.contactForm.controls[control].hasError(error);
  };

  doSomething(e, ref) {
    if (!ref.length) {
      e.preventDefault();
    }
  }

}
