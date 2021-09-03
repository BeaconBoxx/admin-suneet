import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailUserComponent } from './detail-user/detail-user.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { RequestListComponent } from './detail-user/request-list/request-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { StudentListComponent } from './detail-user/student-list/student-list.component';
@NgModule({
  declarations: [UsersComponent, EditUserComponent, ListUserComponent, AddUserComponent, DetailUserComponent, RequestListComponent, StudentListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class UsersModule { }
