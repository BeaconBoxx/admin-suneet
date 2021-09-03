import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { DeviceAddComponent } from './device-add/device-add.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { TeacherDeviceComponent } from './device-list/teacher-device/teacher-device.component';
import { StudentDeviceComponent } from './device-list/student-device/student-device.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddTeacherDeviceComponent } from './device-list/add-teacher-device/add-teacher-device.component';
import { EditTeacherDeviceComponent } from './device-list/edit-teacher-device/edit-teacher-device.component';
import { AddStudentDeviceComponent } from './device-list/add-student-device/add-student-device.component';
import { EditStudentDeviceComponent } from './device-list/edit-student-device/edit-student-device.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [DeviceComponent, DeviceAddComponent, DeviceEditComponent, DeviceListComponent, TeacherDeviceComponent, StudentDeviceComponent, AddTeacherDeviceComponent, EditTeacherDeviceComponent, AddStudentDeviceComponent, EditStudentDeviceComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    MatTabsModule,
    MatSlideToggleModule,
    NgbModule,
    MatDialogModule
  ]
})
export class DeviceModule { }
