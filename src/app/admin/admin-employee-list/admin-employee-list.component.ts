import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee-list/employee';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-admin-employee-list',
  templateUrl: './admin-employee-list.component.html',
  styleUrls: ['./admin-employee-list.component.css']
})
export class AdminEmployeeListComponent implements OnInit {

  employeeList: Employee[];
   @Input() id;
   @Input() name;
   @Input() lastName;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(employeeList => {
      console.log('got list of employees',employeeList),
      this.employeeList = employeeList;
      
    });
  }

}
