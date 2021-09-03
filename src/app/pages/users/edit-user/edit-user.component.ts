import { Component, OnInit } from '@angular/core';
declare const bsCustomFileInput: {
  init(inputSelector?: string, formSelector?: string): void;
  destroy(): void;
};
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  toppingList: string[] = ['1st', '2nd', '3rd', '4th', '5th', '6th','7th','8th','9th','10th','11th','12th'];
  breadCrumbItems: Array<{}>;
  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Elements', active: true }];
    bsCustomFileInput.init();
  }

}
