import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  toppingList: string[] = ['1st', '2nd', '3rd', '4th', '5th', '6th','7th','8th','9th','10th','11th','12th'];
  constructor() { }

  ngOnInit(): void {
  }

}
