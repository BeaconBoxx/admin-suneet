import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-notificaton-list',
  templateUrl: './notificaton-list.component.html',
  styleUrls: ['./notificaton-list.component.css']
})
export class NotificatonListComponent implements OnInit {
  public currentTabIndex = 0  //default tab index is 1
  constructor(private modalService: NgbModal) { }
  searchText = {
		event: new Subject(),
		value: ''
	}
  timeOut:any;
  ngOnInit(): void {
  }

onTabChange(event: MatTabChangeEvent) {
    this.currentTabIndex = event.index;
}

searchHere() {
  clearTimeout(this.timeOut);
  this.timeOut = setTimeout(() => { this.searchText.event.next() }, 1050);
}

  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
}
