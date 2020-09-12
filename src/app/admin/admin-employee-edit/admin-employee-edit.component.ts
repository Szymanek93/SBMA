import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee-list/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-admin-employee-edit',
  templateUrl: './admin-employee-edit.component.html',
  styleUrls: ['./admin-employee-edit.component.css']
})
export class AdminEmployeeEditComponent implements OnInit {
 
  employeeList: Employee[];

  employeeEditForm = new FormGroup({
    name: new FormControl(''), 
    lastName: new FormControl(''),
   });

   employeeId:number;
   employee: Employee;
   
  constructor(private route: ActivatedRoute, private router:Router,
    private employeeService: EmployeeService, 
    private fb:FormBuilder ) {//pobieranie danych z aktywnego url

   }

  ngOnInit(): void {
    this.employee=new Employee();

    this.employeeId = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.employeeId)
    .subscribe(emp=>{
      console.log(emp)
      this.employee=emp;
    })
  }
  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeId,this.employee).
    subscribe(emp=> {
      console.log(emp);
      this.employee=new Employee();
      this.gotoList();
      
    })
  }
    gotoList(){
      this.router.navigate(['/admin/employee']);
    }

    onSubmit(){
    this.updateEmployee()
   }
   
  }