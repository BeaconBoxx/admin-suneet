import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../_services/common.service';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {

  legal:any;
  legalFlag: boolean=false;

  constructor(private http: CommonService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCms();
  }

  getCms(){
    this.http.get('cms/get-cms/').subscribe((res:any) => {
      if(res.code == 200){
        this.legal=res.data.legal;
      }
    })
  }
  
  ValidationChk()
  {
    if(this.legal){
    if(this.legal.replace(/<(.|\n)*?>/g, '').trim().length === 0)
    {
      this.legal=null;
      this.legalFlag=true;
    }
    else
    {
      this.legalFlag=false;
    }
  }
  }

  update(){
     var params={
       'legal':this.legal
     }
     if(this.legal){
     this.http.post('cms/create-update-cms/',params).subscribe((res: any) => {
        if(res.code == 200){
          this.toastr.success(res.message,'Success');
          this.getCms();
        }
     })
    }
    else
    {
      this.legalFlag=true
    }
  }

}

