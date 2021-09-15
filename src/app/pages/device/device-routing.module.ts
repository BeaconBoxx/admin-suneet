import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
