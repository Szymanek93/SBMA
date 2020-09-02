import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEmployeeEditComponent } from './admin/admin-employee-edit/admin-employee-edit.component';


const routes: Routes = [
  // {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {path:'employee', component:EmployeeListComponent},

  {path:'admin', component:AdminComponent,
  children:[
  {path:'admin/:id/edit', component:AdminEmployeeEditComponent}
  //{path: '', loadChildren: 'app/test'  }
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
