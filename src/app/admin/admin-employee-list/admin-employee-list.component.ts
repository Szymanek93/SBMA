import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee-list/employee';
import { EmployeeService } from 'src/app/employee.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-admin-employee-list',
  templateUrl: './admin-employee-list.component.html',
  styleUrls: ['./admin-employee-list.component.css']
})
export class AdminEmployeeListComponent implements OnInit {

  employeeList: Employee[];
//  employeeEditForm = new FormGroup({ //grupa inputów formularza
//    name: new FormControl('employee name'), //definiuje jeden input/kontrolke w formularzu w nawiasie przekazujemy zmienna domyslą pola
//    lastName: new FormControl(''),

//  })

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(employeeList => {
      console.log('got list of employees',employeeList),
      this.employeeList = employeeList;
      
    });
  }

}
