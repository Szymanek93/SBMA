import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from 'src/app/business-list/business';
import { BusinessService } from 'src/app/business.service';
import { EmployeeService } from 'src/app/employee.service';
import { InvoiceDTO } from 'src/app/invoice-list/InvoiceDTO';
import { InvoiceService } from 'src/app/invoice.service';
import { Report } from 'src/app/report-list/report';
import { ReportService } from 'src/app/report.service';

@Component({
  selector: 'app-admin-invoice-edit',
  templateUrl: './admin-invoice-edit.component.html',
  styleUrls: ['./admin-invoice-edit.component.css']
})
export class AdminInvoiceEditComponent implements OnInit {

  constructor( private reportService: ReportService,
    private businessService:BusinessService,
    private employeeService: EmployeeService,
    private invoiceService:InvoiceService,
    private router:Router, private route: ActivatedRoute) { }

    reportList:Report[];
    businessList:Business[];
    invoiceList:InvoiceDTO[]
    invoiceId:number;
    reportId:number;

    invoiceEditForm = new FormGroup({
      reportId: new FormControl(' '),
      price: new FormControl(' '),
      isued: new FormControl(' '),
      booked: new FormControl(' '),
    });
    

invoiceDTO: InvoiceDTO = new InvoiceDTO();
submited=false;
    


  ngOnInit(): void {
    this.getAllReports();
    this.invoiceDTO=new InvoiceDTO();
    this. invoiceId=this.route.snapshot.params['id'];
    this.invoiceService.getInvoice(this.invoiceId)
    .subscribe(inv=>{
      console.log(inv)
      this.invoiceDTO=inv;
    })

  }
  getReport(){
    this.reportService.getReport(this.reportId)
  }
  onSubmit(){
    this.submited=true;
    this.updateInvoice();
  }
  updateInvoice() {
    this.invoiceService.updateInvoice(this.invoiceId,this.invoiceDTO).subscribe(inv=>{
      console.log(inv);
      this.invoiceDTO=new InvoiceDTO();
      this.gotoList()
    },
    error=>console.log(error));
  }
  gotoList() {
    this.router.navigate(['/admin/invoice']);

  }
  getAllReports() {
    this.reportService.getAllReports().subscribe(reportList=>{
      console.log('got list reports', reportList)
      this.reportList=reportList;
    })
  }

}
