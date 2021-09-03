import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list=[
    {
      name:"John",
      id:"#5545443",
      comment: "Lorem ipsum dummy content It is useful for all type site and use for dummy content  all type site and use for dummy content all type site and use for dummy content"
    }
  ]
}
