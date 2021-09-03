import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {
      no:"1",
      studentName : "Andy",
      WristbandID: "#3434343",
      class: "10th",
      rollno: "12",
      motherName: "Soya",
      fatherName: "Andrew",
      email: "andrew@xyz.com",
      phoneNo: "9554443321",
      altphoneNo: "9554443321",     
      action:1

    },
    {
      no:"2",
      studentName : "Andy",
      WristbandID: "#3434343",
      class:"10th",
      rollno: "15",
      motherName: "Soya",
      fatherName: "Andrew",
      email: "andrew@xyz.com",
      phoneNo: "9554443321",
      altphoneNo: "9554443321",     
      action:1

    }
  ]
}

