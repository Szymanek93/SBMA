import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  @Input() id;
  @Input() employeeName;
  @Input() employeeLastName;
  @Input() businessName;
  @Input() completeTasks;
  @Input() devDate;
  @Input() workDate;
  @Input() pointAmount;
  @Input() otherTasks;

  constructor() { }

  ngOnInit(): void {
  }

}
