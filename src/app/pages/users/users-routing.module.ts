import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { DetailUserComponent } from "./detail-user/detail-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { AddUserComponent } from "./add-user/add-user.component";
const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [
      {
        path: "userlist",
        component: ListUserComponent,
        data: {
          title: "Users",
        }
      },
      {
        path: "userdetail",
        component: DetailUserComponent,
        data: {
          title: "User Detail",
        }
      },
      {
        path: "useredit",
        component: EditUserComponent,
        data: {
          title: "Edit User",
        }
      },
      {
        path: "useradd",
        component: AddUserComponent,
        data: {
          title: "Add User",
        }
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
