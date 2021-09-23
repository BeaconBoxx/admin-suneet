import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../_services/common.service';
import { urls } from '../../../_services/urls';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  Faqcheck:FormGroup;
  termscond: any;
  IdData: any;
  
  constructor(private Srvc:CommonService,private formBuilder:FormBuilder,private noti:ToastrService,private spinner: NgxSpinnerService) 
  {

  this.Faqcheck = this.formBuilder.group({
    specification: this.formBuilder.array([], [Validators.required]),
  })

  }

  ngOnInit(): void {
    this.GetFaq()
  }
  GetFaq(){ 
      this.Srvc.get(urls.getCmsFaq).subscribe((res:any)=>
      {
        if([200,201].includes(res.code)){
          this.setSpecifications(res.data)
          this.IdData = res?.data
        }
      })
  } 

  addNewSpecification() {
   
    this.specification().push(this.newSpecifiaction())
  }
  removeSpecification(i: number) {
    this.specification().removeAt(i);
  }
newSpecifiaction(): FormGroup {
    return this.formBuilder.group({
      question: new FormControl('', [Validators.required]),
      answer: new FormControl('', [Validators.required]),
      id: new FormControl('')
    })
  }
 specification(): FormArray {
    return this.Faqcheck.get('specification') as FormArray;
  }
saveFaq()

  {
    this.noti.clear()
    this.spinner.show();
    this.Faqcheck.controls['specification'].value.forEach(v => (v.id=="")?delete v.id:'')
 
    if(this.Faqcheck.valid && this.Faqcheck.controls['specification'].value.length>0)
    {
      this.Srvc.post(urls.createCmsFaq,this.Faqcheck.get('specification').value).subscribe((res:any)=>
      {
        if(res.code == 200)
        {
         this.noti.success("Faq's updated successfully",'Success')
         setTimeout(()=>{this.spinner.hide()},1000);
        }
      })
    }else{
      this.Faqcheck.markAllAsTouched()
    }
 
  }

  setSpecifications(item) {
    const formArray = new FormArray([]);
    for (let x of item) {
      console.log(x)
      formArray.push(this.formBuilder.group({
        question: [x.question,[Validators.required]],
        answer: [x.answer,[Validators.required]],
        id:x.id
      }));
    }
    this.Faqcheck.setControl('specification',formArray)
  }
}