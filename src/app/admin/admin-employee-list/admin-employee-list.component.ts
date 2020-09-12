import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee-list/employee';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin-employee-list',
  templateUrl: './admin-employee-list.component.html',
  styleUrls: ['./admin-employee-list.component.css']
})
export class AdminEmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  employeeList: Employee[];
//  employeeEditForm = new FormGroup({ //grupa inputów formularza
//    name: new FormControl('employee name'), //definiuje jeden input/kontrolke w formularzu w nawiasie przekazujemy zmienna domyslą pola
//    lastName: new FormControl(''),

//  })

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute, private router:Router,) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(employeeList => {
      console.log('got list of employees',employeeList),
      this.employeeList = employeeList;
      
    });
  }
  //TODO add Delete method
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id)
    .subscribe(emp=>{
      console.log(emp);
      this.reloadData();
    })
  }
  
  // gotoList(){
  //   this.router.navigate(['/admin/employee']);
  // }
reloadData(){
  window.location.reload();
}
}
