import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../_services/common.service';
import { urls } from '../../../_services/urls';

@Component({
  selector: 'app-add-emergency',
  templateUrl: './add-emergency.component.html',
  styleUrls: ['./add-emergency.component.scss']
})
export class AddEmergencyComponent implements OnInit {
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
    this.commn_.get(urls.getUserDetailsById+this.userId+"/").subscribe(res=>{
      console.log(res);
      this.items=res?.data;
    });
  }
  
  back()
  {
    history.back();
  }

}
