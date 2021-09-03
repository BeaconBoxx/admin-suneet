import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentDeviceComponent } from './add-student-device.component';

describe('AddStudentDeviceComponent', () => {
  let component: AddStudentDeviceComponent;
  let fixture: ComponentFixture<AddStudentDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
