import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../../_services/common.service';

@Component({
  selector: 'app-add-student-device',
  templateUrl: './add-student-device.component.html',
  styleUrls: ['./add-student-device.component.css']
})
export class AddStudentDeviceComponent implements OnInit {
  deviceForm:FormGroup;
  constructor(private fb:FormBuilder,private commn_:CommonService,private dialog:MatDialog) {
    this.deviceForm=this.fb.group({
    device_name:['',[Validators.required]],
    model_number:['',[Validators.required]],
    serial_number:['',[Validators.required]],
    version:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }
 
  //add device
  addDevice()
  {
  if(this.deviceForm.valid){

  }
  else{
    this.deviceForm.markAllAsTouched();
  }
  }
  
  close()
  {
    this.dialog.closeAll();
  }

}
