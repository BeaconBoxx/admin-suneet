import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeofenceComponent } from './geofence.component';
import { GeofenceListComponent } from './geofence-list/geofence-list.component';
import { GeofenceAddComponent } from './geofence-add/geofence-add.component';
import { GeofenceEditComponent } from './geofence-edit/geofence-edit.component';
import { GeofenceRoutingModule } from './geofence-routing.module';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [GeofenceComponent, GeofenceListComponent, GeofenceAddComponent, GeofenceEditComponent],
  imports: [
    CommonModule,
    GeofenceRoutingModule,
    AgmCoreModule.forRoot({
      //  apiKey: ''
      })
  ]
})
export class GeofenceModule { }
