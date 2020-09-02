import { Component, OnInit,Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  
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
