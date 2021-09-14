import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../_services/common.service';
@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  disableSelect = new FormControl(false);
  checked:boolean = true;
  notificationForm:FormGroup;
  userItems: any;
  allToggleSelected: boolean = false;
  @ViewChild('mySel') skillSel: MatSelect;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();
  constructor(private fb:FormBuilder,private commn_: CommonService,private spinner: NgxSpinnerService , private toastr:ToastrService) {
    this.notificationForm=this.fb.group({
      notification_type: ['', [Validators.required]],
      notification_mode: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      message: ['', [Validators.required, Validators.minLength(4)]],
      users: ['', [Validators.required]]
    });
   }
  ngOnInit(): void {
    console.log(this.checked);
    this.getNotificationUserList();
  }

  getNotificationUserList() {
    this.commn_.get("admin/get-user-list/").subscribe(res => {
      console.log(res);
      this.userItems = res.data;
    });
  }
  
  createNotification() {
    if (this.notificationForm.valid) {
      let items=[];
      let body={}
      this.spinner.show();
      items=this.notificationForm.get('users').value.map((x) => {
        return { user: x }
      });
      if(items[0].user=='0'){
        console.log(items[0].user);
        items.splice(0,1);
        body = {
          notification_type: this.notificationForm.get('notification_type').value,
          notification_mode: this.notificationForm.get('notification_mode').value,
          title: this.notificationForm.get('title').value,
          message: this.notificationForm.get('message').value,
          notification_users: items
        }
      }else
      {
       body = {
        notification_type: this.notificationForm.get('notification_type').value,
        notification_mode: this.notificationForm.get('notification_mode').value,
        title: this.notificationForm.get('title').value,
        message: this.notificationForm.get('message').value,
        notification_users: items
      }
    }
      console.log(body);
      this.commn_.post("admin/create-notifications/", body).subscribe(res => {
        if(res.code==200)
        {
          setTimeout(() => {this.spinner.hide();},2000);
          this.toastr.success(res.message,"Success",{timeOut:2000});
        }
        else
        {
          this.toastr.error(res.message,"Error",{timeOut:2000});
          setTimeout(() => {this.spinner.hide();},2000);
        }
      });
    }
    else {
      this.notificationForm.markAllAsTouched();
    }
  }

  async onSelection(event: any) {
  
  }
  singleSelection()
  {
    if(this.allToggleSelected == true && this.notificationForm.value.users.length > 0)
    {
      this.skillSel.options.forEach((item: MatOption,i) => {
        if(i == 0)
        {
        item.deselect();
        }
      })
    }
  }
  toggleAllSelection() {
    this.allToggleSelected = !this.allToggleSelected;
    if (this.allToggleSelected) {
      this.skillSel.options.forEach((item: MatOption) => item.select());
    } else {
      this.skillSel.options.forEach((item: MatOption) => {
        item.deselect();
      });
    }
    this.skillSel.close();
  }

}
