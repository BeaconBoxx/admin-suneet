import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../_services/common.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  privacy:any;

  constructor(private http: CommonService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCms();
  }

  getCms(){
    this.http.get('cms/get-cms/').subscribe((res:any) => {
      if(res.code == 200){
        this.privacy=res.data.privacy;
      }
    })
  }

  update(){
     var params={
       'privacy':this.privacy
     }
     this.http.post('cms/create-update-cms/',params).subscribe((res: any) => {
        if(res.code == 200){
          this.toastr.success(res.message,'Success');
          this.getCms();
        }
     })
  }

}

