import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { CommonService } from '../../../_services/common.service';
import { urls } from '../../../_services/urls';
import { ReadMoreComponent } from '../../../_shared/read-more/read-more.component';

@Component({
  selector: 'app-notification-table',
  templateUrl: './notification-table.component.html',
  styleUrls: ['./notification-table.component.css']
})
export class NotificationTableComponent implements OnInit {
  @Input('status') status: any;
  @Input('searchText') searchText = {
		event: new Subject(),
		value: ""
	}
  length=0;
  page=1;
  pageSize=10;
  pageEvent: PageEvent;
  items: any;
  bsModalRef: BsModalRef;
  constructor(private commn_:CommonService,private modalService: BsModalService) { }
  
  ngOnInit(): void {
    console.log(this.status);
    this.getNotificationList();
    this.searchText.event.subscribe(searchText => {
			this.getNotificationList();
		})
  }
  // get List
  getNotificationList()
  {
    let body={
      "is_active": true,
      "draw": 2,
      "columns": [
          {
              "data": "id",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          },
          {
              "data": "message",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          },
          {
              "data": "title",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          }
      ],
      "order": [
          {
              "column": 2,
              "dir": "undefined"
          }
      ],
      "start": this.page,
      "length": this.pageSize,
      "search": {
          "value": this.searchText.value?this.searchText.value:"",
          "regex": false
      }
  }
  this.commn_.post(urls.getAllNotification+this.status+"/",body).subscribe(res=>{
    console.log(res);
    this.items=res?.data;
    this.length=res.recordsTotal;
  })
  }
 
  // pagination
  pageSizeChanged(e): PageEvent {
    if (e.pageIndex == 0) {
      this.page = e.pageIndex;
    } else {
      if (e.previousPageIndex < e.pageIndex) {
        this.page =this.page+ e.pageSize;
      } else {
        this.page =this.page- e.pageSize;
      }
    }
    this.pageSize = e.pageSize
    this.getNotificationList();
    return e;
}

readModel(msg){
  this.bsModalRef = this.modalService.show(ReadMoreComponent, {
    initialState: {
      message:msg,
      title:"Message",
      items:[]
    }
  });
}

userListModel(list)
{
  this.bsModalRef = this.modalService.show(ReadMoreComponent, {
    initialState: {
      message:"",
      title:"User List",
      items:list
    }
  });
}
 

}
