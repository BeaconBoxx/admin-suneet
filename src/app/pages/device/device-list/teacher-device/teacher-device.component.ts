import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTeacherDeviceComponent } from '../add-teacher-device/add-teacher-device.component';

@Component({
  selector: 'app-teacher-device',
  templateUrl: './teacher-device.component.html',
  styleUrls: ['./teacher-device.component.css']
})
export class TeacherDeviceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AddTeacherDeviceComponent);
  }
  data = [
    {
      no:1,
      name:"Andy",
      id:"#34343334",
      battery:"70%",
      action:"1"
    }
  ];
}
