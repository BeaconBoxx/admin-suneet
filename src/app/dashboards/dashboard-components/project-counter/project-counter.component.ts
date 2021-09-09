import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../_services/common.service';
@Component({
  selector: 'app-project-counter',
  templateUrl: './project-counter.component.html'
})
export class ProjectCounterComponent implements OnInit{
  calls: boolean = false
  data:any;
  constructor(private http:CommonService) {}

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.http.get('dashboard/get-dashboard-details/').subscribe((res :any) => {
       if(res.code == 200){
        this.data=res.data;
       }
    })
  }

  Calls(e){
    console.log(e.target.value)
    if(e.target.value == 'first') {
      this.calls= true
    } else {
      this.calls = false
    }
  }
}
