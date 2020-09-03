import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee-list/employee';
import { ActivatedRoute } from '@angular/router';
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

   private employeeId:number;
   private employee: Employee;
   
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private fb:FormBuilder ) {//pobieranie danych z aktywnego url

   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // parametr jest typu String, dlatego musimy wymusić, żeby został zrzutowany na typ number
      this.employeeId = +params.id;
      this.employeeService.findById(this.employeeId).subscribe(employee => {
      this.employee = employee;
      console.log('employee', this.employee);
      
      // this.employeeEditForm = new FormGroup({
      // name: new FormControl(this.employee.name),// 1 opcja formularza
      // lastName: new FormControl(this.employee.lastName),
      this.employeeEditForm = this.fb.group({//formularz + walidacja
        name:[this.employee.name, Validators.required],//pole obowiazkowe
        lastName:[this.employee.lastName]
    });
  });

});
}

  onSubmit(){
    console.log('form submit', this.employeeEditForm.value);
    if(this.employeeEditForm.valid){
      // this.employeeService.save
    }
    console.log('submit');
    console.log(this.employeeEditForm.value);
    if(this.employeeEditForm.touched && this.employeeEditForm.valid){
      console.log('valid-send form');
    }else {
      alert('invalid form')
    }
    }

  }



