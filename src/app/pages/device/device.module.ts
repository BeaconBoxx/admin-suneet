import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { StudentDeviceComponent } from './device-list/student-device/student-device.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddStudentDeviceComponent } from './device-list/add-student-device/add-student-device.component';
import { EditStudentDeviceComponent } from './device-list/edit-student-device/edit-student-device.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [DeviceComponent, DeviceListComponent, StudentDeviceComponent, AddStudentDeviceComponent, EditStudentDeviceComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    MatTabsModule,
    MatSlideToggleModule,
    NgbModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [AddStudentDeviceComponent,EditStudentDeviceComponent],
})
export class DeviceModule { }
