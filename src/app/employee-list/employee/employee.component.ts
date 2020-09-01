import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

@Input() id;
@Input() name;
@Input() lastName;
  constructor() { }

  ngOnInit(): void {
  }

}
