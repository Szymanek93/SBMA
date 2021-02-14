import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Report } from 'src/app/report-list/report';
import { ReportService } from 'src/app/report.service';

@Component({
  selector: 'app-admin-report-list',
  templateUrl: './admin-report-list.component.html',
  styleUrls: ['./admin-report-list.component.css']
})
export class AdminReportListComponent implements OnInit {
  
  @Input() id;
  @Input() employeeName;
  @Input() employeeLastName;
  @Input() businessName;
  @Input() completeTasks;
  @Input() devDate;
  @Input() workDate;
  @Input() pointAmount;
  @Input() otherTasks;

  report : Observable<Report[]>;
  reportList: Report[];

  constructor(private reportService: ReportService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.reportService.getAllReports().subscribe(reportList=> {
      console.log('got list of reports',reportList),
      this.reportList = reportList;
    });
  }

    deleteRaport (id:number){
      this.reportService.deleteReport(id)
      .subscribe(emp=>{
        console.log(emp);
        this.reloadData();
      })
    }
    reloadData(){
      window.location.reload();
  }
  gotoCreate(){
    this.router.navigate(['/admin/report/create'])
  }
  
  }
