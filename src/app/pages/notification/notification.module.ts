import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { NotificatonListComponent } from './notificaton-list/notificaton-list.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationTableComponent } from './notification-table/notification-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxScrollToFirstInvalidModule } from '@ismaestro/ngx-scroll-to-first-invalid';
@NgModule({
  declarations: [NotificationComponent, NotificatonListComponent, AddNotificationComponent, NotificationTableComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NotificationRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    NgbModule,
    MatTabsModule,
    MatPaginatorModule,
    NgxScrollToFirstInvalidModule
  ]
})
export class NotificationModule { }
