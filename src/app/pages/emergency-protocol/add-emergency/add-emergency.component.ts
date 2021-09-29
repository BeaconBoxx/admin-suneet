import { urls } from './../../../_services/urls';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../_services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-emergency',
  templateUrl: './add-emergency.component.html',
  styleUrls: ['./add-emergency.component.scss']
})
export class AddEmergencyComponent implements OnInit {
  emergencyForm:FormGroup;
  items: any;
  Emergencyitems: any=[];
  
  constructor(private fb:FormBuilder,private toastr:ToastrService,private commn_:CommonService,private dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public id) {
    this.emergencyForm=this.fb.group({
      timer:['',[Validators.required]],
      action:['',[Validators.required]],
      message:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  console.log(this.id);
  this.getEmergencyAction();
  if(this.id){
  this.getEmergencyProtocolById();
  }
  }
  
  updateEmergency()
  {
    let obj=this.emergencyForm.value
    obj['timer']=JSON.stringify(((obj.timer.hour)*3600)+((obj.timer.minute)*60)+((obj.timer.second)));
    console.log(this.emergencyForm)
    if(this.emergencyForm.valid)
    {
      this.commn_.put(urls.updateEmergencyProtocol+this.id+"/",obj).subscribe(res=>{
        if(res.code==200)
          {
          this.toastr.success(res.message,"Success",{timeOut:2000});
          this.close();
          }
      })
    }
    else
    {
      this.emergencyForm.markAllAsTouched();
    }
  }
  
  getEmergencyProtocolById()
  {
    this.commn_.get(urls.getEmergencyProtocol).subscribe(res=>{
      this.Emergencyitems=res.data;
      this.Emergencyitems.filter(res=>{
        if(res.id==this.id){
          console.log(res);
          let time=this.getTime(res.timer);
          this.emergencyForm.patchValue({timer:time});
          this.emergencyForm.patchValue({action:res.action.id});
          if(res.message)
          {
            this.emergencyForm.patchValue({message:res.message});
          }
          else
          {
            this.emergencyForm.controls.message.disable();
          }
        }
      })
    })
  }
  
  getTime(time)
  {
    let totalSeconds=Math.floor(time);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600; 
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return {hour:hours,minute:minutes,second:seconds}
  }

  addEmergency()
  {
    if(this.emergencyForm.valid)
    {
      let obj=this.emergencyForm.value
      obj['timer']=JSON.stringify(((obj.timer.hour)*3600)+((obj.timer.minute)*60)+((obj.timer.second)))
      this.commn_.post(urls.addEmergencyProtocol,obj).subscribe(res=>{
      if(res.code==200)
      {
      this.toastr.success(res.message,"Success",{timeOut:2000});
      this.close();
      }
      })
    }
    else
    {
      this.emergencyForm.markAllAsTouched();
    }
  }

  close()
  {
    this.dialog.closeAll();
  }
  
  disabledMessage(){
    console.log(this.emergencyForm.value.action);
    this.emergencyForm.value.action!=2?this.emergencyForm.controls.message.disable():this.emergencyForm.controls.message.enable();
    this.emergencyForm.value.action!=2?this.emergencyForm.controls.message.setValue(''):"";
  }
  
  getEmergencyAction()
  {
    this.commn_.get(urls.getEmergencyAction).subscribe(res=>{
      this.items=res.data;
    })
  }

}
