import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee-list/employee';
import { EmployeeDTO } from 'src/app/employee-list/employeeDTO';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-admin-employee-create',
  templateUrl: './admin-employee-create.component.html',
  styleUrls: ['./admin-employee-create.component.css']
})
export class AdminEmployeeCreateComponent implements OnInit {

  
  //employee: Employee = new Employee();
  employeeDTO : EmployeeDTO = new EmployeeDTO()
  submited=false;
  //formularz walidacji
  myForm: FormGroup;
  post: any;

  constructor(private employeeService:EmployeeService,
    private router:Router, private fb:FormBuilder) { 
      this.myForm =fb.group({
        'formName' : [null,Validators.compose([Validators.required, Validators.minLength(3)])],
        'formLastName' : [null,Validators.compose([Validators.required, Validators.minLength(3)])]
      })
    }

    addPost(post){
      alert("Post:"+post.name+" "+  post.lastName)
    }

  ngOnInit(): void {
  }

  newEmployee():void{
    this.submited=false;
    this.employeeDTO=new EmployeeDTO();
  }

  save(){
    this.employeeService
    .createEmployee(this.employeeDTO).subscribe(emp=>
      {
        console.log(emp)
        this.employeeDTO=new EmployeeDTO();
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
// {

  
//   //employee: Employee = new Employee();
//   submited=false;

//   constructor(private employeeService:EmployeeService,
//     private router:Router) { }

//   ngOnInit(): void {
//   }

//   newEmployee():void{
//     this.submited=false;
//     this.employee=new Employee();
//   }

//   save(){
//     this.employeeService
//     .createEmployee(this.employee).subscribe(emp=>
//       {
//         console.log(emp)
//         this.employee=new Employee();
//         this.gotoList();
//       },
//       error=>console.log(error));
//   }
// gotoList(){
//   this.router.navigate(['/admin/employee']);
// }
// onSubmit(){
//   this.submited=true;
//   this.save();
// }
}
