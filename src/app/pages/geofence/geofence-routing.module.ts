import { NgModule } from '@angular/core';
import { GeofenceComponent } from './geofence.component';
import { RouterModule, Routes } from '@angular/router'
import { GeofenceListComponent } from './geofence-list/geofence-list.component';
import { GeofenceEditComponent } from './geofence-edit/geofence-edit.component';
import { GeofenceAddComponent } from './geofence-add/geofence-add.component';
const routes: Routes = [
  {
    path:'',
    component:GeofenceComponent,
    children:[
      {
        path:'geofencelist',
        component:GeofenceListComponent,
        data:{
          title:"Geofence"
        }
      },
      {
        path:'geofenceedit',
        component:GeofenceEditComponent,
        data:{
          title:"Edit Geofence "
        }
      },
      {
        path:'geofenceadd',
        component:GeofenceAddComponent,
        data:{
          title:"Add Geofence"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeofenceRoutingModule { }
