import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent implements OnInit {
  toppingList: string[] = ['1st', '2nd', '3rd', '4th', '5th', '6th','7th','8th','9th','10th','11th','12th'];
  constructor() { }

  ngOnInit(): void {
  }

}
