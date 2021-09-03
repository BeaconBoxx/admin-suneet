import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeviceComponent } from './student-device.component';

describe('StudentDeviceComponent', () => {
  let component: StudentDeviceComponent;
  let fixture: ComponentFixture<StudentDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
