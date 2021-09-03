import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeacherDeviceComponent } from './edit-teacher-device.component';

describe('EditTeacherDeviceComponent', () => {
  let component: EditTeacherDeviceComponent;
  let fixture: ComponentFixture<EditTeacherDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTeacherDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeacherDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
