import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherDeviceComponent } from './add-teacher-device.component';

describe('AddTeacherDeviceComponent', () => {
  let component: AddTeacherDeviceComponent;
  let fixture: ComponentFixture<AddTeacherDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeacherDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
