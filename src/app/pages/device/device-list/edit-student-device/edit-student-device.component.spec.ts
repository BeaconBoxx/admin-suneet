import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentDeviceComponent } from './edit-student-device.component';

describe('EditStudentDeviceComponent', () => {
  let component: EditStudentDeviceComponent;
  let fixture: ComponentFixture<EditStudentDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudentDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
