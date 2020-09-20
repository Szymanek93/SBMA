import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee-list/employee/employee.component';
import { EmployeeAddComponent } from './employee-list/employee-add/employee-add.component';
import { AdminEmployeeEditComponent } from './admin/admin-employee-edit/admin-employee-edit.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEmployeeListComponent } from './admin/admin-employee-list/admin-employee-list.component';
import { AdminEmployeeCreateComponent } from './admin/admin-employee-create/admin-employee-create.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessComponent } from './business-list/business/business.component';
import { OwnerComponent } from './owner-list/owner/owner.component';
import { OwnerCreateComponent } from './admin/owner-create/owner-create.component';
import { OwnerEditComponent } from './admin/owner-edit/owner-edit.component';
import { BusinessEditComponent } from './admin/business-edit/business-edit.component';
import { BusinessCreateComponent } from './admin/business-create/business-create.component';
import { AdminBusinessListComponent } from './admin/admin-business-list/admin-business-list.component';
import { AdminOwnerListComponent } from './admin/admin-owner-list/admin-owner-list.component';
import { ReportListComponent } from './report-list/report-list.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    EmployeeComponent,
    EmployeeAddComponent,
    AdminEmployeeEditComponent,
    AdminComponent,
    AdminEmployeeListComponent,
    AdminEmployeeCreateComponent,
    OwnerListComponent,
    BusinessListComponent,
    BusinessComponent,
    OwnerComponent,
    OwnerCreateComponent,
    OwnerEditComponent,
    BusinessEditComponent,
    BusinessCreateComponent,
    AdminBusinessListComponent,
    AdminOwnerListComponent,
    ReportListComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
