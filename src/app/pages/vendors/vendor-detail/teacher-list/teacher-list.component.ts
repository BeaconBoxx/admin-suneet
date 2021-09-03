import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {
      no:"1",
      name : "Andy",
      WristbandID: "#3434343",
      class: "10th",
      email: "andrew@xyz.com",
      phoneNo: "9554443321",  
      gendor: "Female",  

    },
    {
      no:"2",
      name : "Andy",
      WristbandID: "#3434343",
      class: "10th",
      email: "andrew@xyz.com",
      phoneNo: "9554443321",  
      gendor: "Female",  

    },
  ]
}
