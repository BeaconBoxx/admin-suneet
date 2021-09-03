import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddVendorComponent } from "./add-vendor/add-vendor.component";
import { EditVendorComponent } from "./edit-vendor/edit-vendor.component";
import { VendorDetailComponent } from "./vendor-detail/vendor-detail.component";
import { VendorListComponent } from "./vendor-list/vendor-list.component";
import { VendorsComponent } from "./vendors.component";

const routes: Routes = [
  {
    path: "",
    component: VendorsComponent,
    children: [
      {
        path: "vendorlist",
        component: VendorListComponent,
        data: {
          title: "Student",
        },
      },
      {
        path: "addvendor",
        component: AddVendorComponent,
        data: {
          title: "Add Student",
        },
      },
      {
        path: "editvendor",
        component: EditVendorComponent,
        data: {
          title: "Edit Student",
        },
      },
        {
          path: "vendordetail",
          component: VendorDetailComponent,
          data: {
            title: "Student Detail",
          },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRoutingModule {}
