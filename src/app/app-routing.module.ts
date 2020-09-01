import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/main-content', pathMatch: 'full'},
  {path:'employee', component:EmployeeListComponent}
  //{path: '', loadChildren: 'app/test'  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
