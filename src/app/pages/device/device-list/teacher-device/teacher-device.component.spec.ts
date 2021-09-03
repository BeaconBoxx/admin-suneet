import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDeviceComponent } from './teacher-device.component';

describe('TeacherDeviceComponent', () => {
  let component: TeacherDeviceComponent;
  let fixture: ComponentFixture<TeacherDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
