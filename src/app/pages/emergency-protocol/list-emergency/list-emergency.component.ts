import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmergencyComponent } from '../add-emergency/add-emergency.component';

@Component({
  selector: 'app-list-emergency',
  templateUrl: './list-emergency.component.html',
  styleUrls: ['./list-emergency.component.scss']
})
export class ListEmergencyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }
  
  addEmergency()
  {
    this.dialog.open(AddEmergencyComponent);
  }
  
  editEmergency(id)
  {
    this.dialog.open(AddEmergencyComponent,{data:id});
  }

}
