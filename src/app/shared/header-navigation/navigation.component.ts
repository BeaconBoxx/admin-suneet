import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { environment } from '../../../environments/environment';
declare var $: any;
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls:['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  constructor(private modalService: NgbModal,private _router: Router) {}

  // This is for Notifications
  notifications: Object[] = [
    {
      round: 'round-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      round: 'round-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      round: 'round-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      round: 'round-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];
   
  ngAfterViewInit() {}

  logoutMe() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Log Out !',
      cancelButtonText: 'No, Stay here'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem(environment.storageKey);
				this._router.navigate(['/authentication/login']);
        Swal.fire(
          'Success!',
          'Log Out Successfully!',
          'success'
        )}});
	}
  
}
