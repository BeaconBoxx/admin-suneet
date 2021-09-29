import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../_services/common.service';
import { urls } from '../../../_services/urls';
import { ReadMoreComponent } from '../../../_shared/read-more/read-more.component';
import { AddEmergencyComponent } from '../add-emergency/add-emergency.component';

@Component({
  selector: 'app-list-emergency',
  templateUrl: './list-emergency.component.html',
  styleUrls: ['./list-emergency.component.scss']
})
export class ListEmergencyComponent implements OnInit {
  items: any=[];
  actions: any=[];
  bsModalRef: BsModalRef;
  constructor(public dialog: MatDialog,private commn_:CommonService,private modalService: BsModalService) { 
  }
  
  ngOnInit(): void {
    this.getProtocol();
  }
  
  getProtocol()
  {
    this.commn_.get(urls.getEmergencyProtocol).subscribe(res=>{
      this.items=res.data;
      this.items.filter(res=>{
        JSON.parse(res.timer);
      })
      console.log(this.items);
    })
  }

  addEmergency()
  {
    this.dialog.open(AddEmergencyComponent).afterClosed().subscribe((result) => {
      this.getProtocol();
    });
  }
  
  editEmergency(id)
  {
    this.dialog.open(AddEmergencyComponent,{data:id}).afterClosed().subscribe((result) => {
      this.getProtocol();
    });
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

}
