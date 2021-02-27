import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Business } from 'src/app/business-list/business';
import { BusinessService } from 'src/app/business.service';
import { Employee } from 'src/app/employee-list/employee';
import { EmployeeService } from 'src/app/employee.service';
import { ReportDTO } from 'src/app/report-list/reportDTO';
import { ReportService } from 'src/app/report.service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-admin-report-create',
  templateUrl: './admin-report-create.component.html',
  styleUrls: ['./admin-report-create.component.css']
})
export class AdminReportCreateComponent implements OnInit {

  constructor(private businessService:BusinessService,
    private employeeService: EmployeeService,
    private reportService: ReportService,
    private router:Router) { }

  businessList:Business[];
  employeeList:Employee[];
  reportDTO: ReportDTO=new ReportDTO();
  submited=false;

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllBusiness();
  }
newReport():void{
  this.submited=false
  this.reportDTO=new ReportDTO();
}

save(){
  this.reportService
  .createReport(this.reportDTO).subscribe(rep=>
    {
      console.log(rep)
      this.reportDTO=new ReportDTO();
      this.gotoList();
    })
}
  gotoList() {
   this.router.navigate(['/admin/reports']);
  }

  onSubmit(){
    this.submited=true;
    this.save();
  }

  getAllBusiness() {
    this.businessService.getAllBusiness().subscribe(businessList=>{
      console.log('got list og employees', businessList)
      this.businessList=businessList;
    })
    }
  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe(employeeList=>{
      console.log('got list og employees', employeeList)
      this.employeeList=employeeList;
    })
  }

}
