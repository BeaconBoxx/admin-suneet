import { ListEmergencyComponent } from './list-emergency/list-emergency.component';
import { EmergencyProtocolComponent } from './emergency-protocol.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
	{
		path:'',
		component:EmergencyProtocolComponent,
		children:[
		  {
			path:'emergencylist',
			component:ListEmergencyComponent,
			data: {
			  title: "Emergency Protocol",
			}
		  }
		]
	  }
  ];
  
  @NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
  })
export class EmergencyProtocolRoutingModule { }