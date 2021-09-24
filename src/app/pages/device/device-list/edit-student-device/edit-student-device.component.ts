import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student-device',
  templateUrl: './edit-student-device.component.html',
  styleUrls: ['./edit-student-device.component.css']
})
export class EditStudentDeviceComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  
  close()
  {
    this.dialog.closeAll();
  }

}
