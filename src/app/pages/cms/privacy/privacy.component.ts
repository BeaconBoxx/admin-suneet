import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../_services/common.service';
import { urls } from '../../../_services/urls';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  privacy:any;
  privacyFlag: boolean=false;

  constructor(private http: CommonService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCms();
  }

  getCms(){
    this.http.get(urls.getCms).subscribe((res:any) => {
      if(res.code == 200){
        this.privacy=res.data.privacy;
      }
    })
  }
  
  ValidationChk()
  {
    if(this.privacy){
    if(this.privacy.replace(/<(.|\n)*?>/g, '').trim().length === 0)
    {
      this.privacy=null;
      this.privacyFlag=true;
    }
    else
    {
      this.privacyFlag=false;
    }
  }
  }

  update(){
     var params={
       'privacy':this.privacy
     }
     if(this.privacy){
     this.http.post(urls.createCms,params).subscribe((res: any) => {
        if(res.code == 200){
          this.toastr.success(res.message,'Success');
          this.getCms();
        }
     })
    }
    else{this.privacyFlag=true}
  }

}

