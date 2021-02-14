import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee-list/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { EmployeeDTO } from 'src/app/employee-list/employeeDTO';

@Component({
  selector: 'app-admin-employee-edit',
  templateUrl: './admin-employee-edit.component.html',
  styleUrls: ['./admin-employee-edit.component.css']
})
export class AdminEmployeeEditComponent implements OnInit {
 
  employeeList: EmployeeDTO[];

  employeeEditForm = new FormGroup({
    name: new FormControl(''), 
    lastName: new FormControl(''),
   });

   employeeId:number;
   employeeDTO: EmployeeDTO;
   
  constructor(private route: ActivatedRoute, private router:Router,
    private employeeService: EmployeeService, 
    private fb:FormBuilder ) {//pobieranie danych z aktywnego url

   }

  ngOnInit(): void {
    this.employeeDTO=new EmployeeDTO();

    this.employeeId = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.employeeId)
    .subscribe(emp=>{
      console.log(emp)
      this.employeeDTO=emp;
    })
  }
  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeId,this.employeeDTO).
    subscribe(emp=> {
      console.log(emp);
      this.employeeDTO=new EmployeeDTO();
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