import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-emergency',
  templateUrl: './add-emergency.component.html',
  styleUrls: ['./add-emergency.component.scss']
})
export class AddEmergencyComponent implements OnInit {
  emergencyForm:FormGroup;
  
  constructor(private fb:FormBuilder,private dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public id) {
    this.emergencyForm=this.fb.group({
      time:['',[Validators.required]],
      action:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  console.log(this.id);
  }
  
  close()
  {
    this.dialog.closeAll();
  }

}
