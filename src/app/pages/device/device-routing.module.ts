import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceAddComponent } from './device-add/device-add.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceComponent } from './device.component';

const routes: Routes = [
  {
    path:'',
    component:DeviceComponent,
    children:[
      {
        path:'devicelist',
        component:DeviceListComponent,
        data:{
          title:"Devices"
        }
      },
      {
        path:'adddevice',
        component:DeviceAddComponent,
        data:{
          title:"Add Device"
        }
      },
      {
        path:'editdevice',
        component:DeviceEditComponent,
        data:{
          title:"Edit Device"
        }
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
