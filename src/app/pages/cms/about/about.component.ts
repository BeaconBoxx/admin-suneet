import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../_services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about:any;
  aboutFlag: boolean=false;
  constructor(private http: CommonService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCms();
  }

  getCms(){
    this.http.get('cms/get-cms/').subscribe((res:any) => {
      if(res.code == 200){
        this.about=res.data.about;
      }
    })
  }
 
  ValidationChk()
  {
    if(this.about){
    if(this.about.replace(/<(.|\n)*?>/g, '').trim().length === 0)
    {
      this.about=null;
      this.aboutFlag=true;
    }
    else
    {
      this.aboutFlag=false;
    }
  }
  }

  update(){
     var params={
       'about':this.about
     }
     if(this.about){
     this.http.post('cms/create-update-cms/',params).subscribe((res: any) => {
        if(res.code == 200){
          this.toastr.success(res.message,'Success');
          this.getCms();
        }
     })
    }
    else
    {
      this.aboutFlag=true;
    }
  }

}
