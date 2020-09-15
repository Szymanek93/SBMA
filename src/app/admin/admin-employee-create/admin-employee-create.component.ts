import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee-list/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-admin-employee-create',
  templateUrl: './admin-employee-create.component.html',
  styleUrls: ['./admin-employee-create.component.css']
})
export class AdminEmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();
  submited=false;

  constructor(private employeeService:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
  }

  newEmployee():void{
    this.submited=false;
    this.employee=new Employee();
  }

  save(){
    this.employeeService
    .createEmployee(this.employee).subscribe(emp=>
      {
        console.log(emp)
        this.employee=new Employee();
        this.gotoList();
      },
      error=>console.log(error));
  }
gotoList(){
  this.router.navigate(['/admin/employee']);
}
onSubmit(){
  this.submited=true;
  this.save();
}

}
