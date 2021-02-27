import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from 'src/app/business-list/business';
import { Employee } from 'src/app/employee-list/employee';
import { EmployeeService } from 'src/app/employee.service';
import { ReportDTO } from 'src/app/report-list/reportDTO';
import { ReportService } from 'src/app/report.service';
import { BusinessService } from 'src/app/business.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-report-edit',
  templateUrl: './admin-report-edit.component.html',
  styleUrls: ['./admin-report-edit.component.css']
})
export class AdminReportEditComponent implements OnInit {

  constructor(private businessService:BusinessService,
    private employeeService: EmployeeService,
    private reportService: ReportService,
    private router:Router, private route: ActivatedRoute) { }


  businessList:Business[];
  employeeList:Employee[];
  reportId:number;
  reportEditForm = new FormGroup({  
    businessId: new FormControl(' '),
    employeeId : new FormControl(' '),
    reportCompletedTasks:new FormControl(' '),
    reportDevelopmentDate: new FormControl(' '),
    reportId: new FormControl(' '),
    reportOtherTasks: new FormControl(' '),
    reportWorksDate: new FormControl(' '),
    reportPointsAmount: new FormControl(' ') ,
  });

  reportDTO: ReportDTO=new ReportDTO();
  submited=false;

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllBusiness();
    this.reportDTO=new ReportDTO();
    this.reportId=this.route.snapshot.params['id'];

    this.reportService.getReport(this.reportId)
    .subscribe(rep=>{
      console.log(rep)
      this.reportDTO=rep;
    })
  }
newReport():void{
  this.submited=false
  this.reportDTO=new ReportDTO();
}


  gotoList() {
   this.router.navigate(['/admin/reports']);
  }

  onSubmit(){
    this.submited=true;
    this.updateReport();
  }
  updateReport() {
    this.reportService.updateReport(this.reportId,this.reportDTO).
    subscribe(rep=>{
      console.log(rep);
      this.reportDTO=new ReportDTO();
      this.gotoList()
    },
    error=>console.log(error));
  }

  refresh(): void {
    window.location.reload();
}
  // reload() void {
  //   this.router.navigate(['admin/reports/create'])
  // }
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