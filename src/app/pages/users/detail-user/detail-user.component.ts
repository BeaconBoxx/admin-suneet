import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../_services/common.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  userId: any;
  items: any;

  constructor(private route: ActivatedRoute,private commn_: CommonService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userId= params.id;
      this.getUserById();
    });
  }
  
  getUserById()
  {
    this.commn_.get("admin/get-user-details-by-id/"+this.userId+"/").subscribe(res=>{
      console.log(res);
      this.items=res?.data;
    });
  }
 
}
