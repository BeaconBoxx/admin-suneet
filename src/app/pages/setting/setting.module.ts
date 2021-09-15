import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingComponent, ProfileComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0",
      libraries: ["places", "drawing", "geometry"],
        }),
        GooglePlaceModule,
        ReactiveFormsModule
  ]
})
export class SettingModule { }
