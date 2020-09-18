import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  @Input() id;
  @Input() businessType;
  @Input() businessName;
  @Input() businessCity;
  @Input() businessPostCode;
  @Input() businessStreet;
  @Input() businessHouseNumber;
  @Input() businessDetails;
  // @Input() Owner;
  constructor() { }

  ngOnInit(): void {
  }

}
