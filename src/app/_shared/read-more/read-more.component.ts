import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  message:any;
  title:string;
  items:any;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.bsModalRef.content
  }

}
