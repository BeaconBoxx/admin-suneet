import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddStudentDeviceComponent } from "../add-student-device/add-student-device.component";
import { EditStudentDeviceComponent } from "../edit-student-device/edit-student-device.component";

@Component({
  selector: "app-student-device",
  templateUrl: "./student-device.component.html",
  styleUrls: ["./student-device.component.css"],
})
export class StudentDeviceComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  data = [
    {
      no:1,
      name:"Apple Watch",
      id:"A5123",
      emi:"FSW4545FEDSE",
      version:"6.8.8",
      action:"1"
    },
    {
      no:1,
      name:"Apple Watch",
      id:"A5123",
      emi:"FSW4545FEDSE",
      version:"6.8.8",
      action:"1"
    },
    {
      no:1,
      name:"Apple Watch",
      id:"A5123",
      emi:"FSW4545FEDSE",
      version:"6.8.8",
      action:"1"
    }  
  ];
  
    addDialog() {
      this.dialog.open(AddStudentDeviceComponent);
    }
    editDialog() {
      this.dialog.open(EditStudentDeviceComponent);
    }
 
}
