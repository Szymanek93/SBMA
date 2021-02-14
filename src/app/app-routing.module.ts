import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEmployeeEditComponent } from './admin/admin-employee-edit/admin-employee-edit.component';
import { AdminEmployeeListComponent } from './admin/admin-employee-list/admin-employee-list.component';
import { AdminEmployeeCreateComponent } from './admin/admin-employee-create/admin-employee-create.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { AdminBusinessListComponent } from './admin/admin-business-list/admin-business-list.component';
import { BusinessEditComponent } from './admin/business-edit/business-edit.component';
import { BusinessCreateComponent } from './admin/business-create/business-create.component';
import { AdminOwnerListComponent } from './admin/admin-owner-list/admin-owner-list.component';
import { OwnerEditComponent } from './admin/owner-edit/owner-edit.component';
import { OwnerCreateComponent } from './admin/owner-create/owner-create.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ReportListComponent } from './report-list/report-list.component';
import { AdminReportListComponent } from './admin/admin-report-list/admin-report-list.component';


const routes: Routes = [
  // {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {path:'employee', component:EmployeeListComponent},
  {path:'businesses', component:BusinessListComponent},
  {path:'owner', component:OwnerListComponent},
  {path:'home', component:MainContentComponent},
  {path:'reports', component:ReportListComponent},

  {
    path:'admin', component:AdminComponent,
  children:[
  {path:'employee', component:AdminEmployeeListComponent},
  {path:'employee/:id/edit', component:AdminEmployeeEditComponent},
  {path:'employee/create', component:AdminEmployeeCreateComponent},
  {path:'businesses',component:AdminBusinessListComponent},
  {path:'businesses/:id/edit',component: BusinessEditComponent},
  {path:'businesses/create',component:BusinessCreateComponent},
  {path: 'owners', component:AdminOwnerListComponent},
  {path: 'owners/:id/edit', component:OwnerEditComponent},
  {path: 'owners/create', component:OwnerCreateComponent},
  {path: 'reports', component:AdminReportListComponent}
  
  // {path:'employee/:id/delete'}
  //{path: '', loadChildren: 'app/test'  }
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
