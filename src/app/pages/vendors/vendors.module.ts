import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import {MatSelectModule} from '@angular/material/select';
import { RequestListComponent } from './vendor-detail/request-list/request-list.component';
import { TeacherListComponent } from './vendor-detail/teacher-list/teacher-list.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [VendorsComponent, AddVendorComponent, EditVendorComponent, VendorListComponent, VendorDetailComponent, RequestListComponent, TeacherListComponent],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    NgbModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class VendorsModule { }
