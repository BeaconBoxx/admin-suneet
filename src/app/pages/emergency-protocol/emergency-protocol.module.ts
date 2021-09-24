import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmergencyProtocolRoutingModule } from './emergency-protocol-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmergencyComponent } from './add-emergency/add-emergency.component';
import { ListEmergencyComponent } from './list-emergency/list-emergency.component';
import { EmergencyProtocolComponent } from './emergency-protocol.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxScrollToFirstInvalidModule } from '@ismaestro/ngx-scroll-to-first-invalid';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [AddEmergencyComponent, ListEmergencyComponent, EmergencyProtocolComponent],
  imports: [
    CommonModule,
    EmergencyProtocolRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatPaginatorModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0",
      libraries: ["places", "drawing", "geometry"],
        }),
        GooglePlaceModule,
        NgxIntlTelInputModule,
        NgxScrollToFirstInvalidModule
  ],
  entryComponents: [AddEmergencyComponent],
})
export class EmergencyProtocolModule { }
