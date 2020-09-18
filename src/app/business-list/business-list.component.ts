import { Component, OnInit,Input } from '@angular/core';
import { BusinessService } from '../business.service';
import { Owner } from '../owner-list/owner';
import { Business } from './business';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  businessList:Business[];
  ownerList: Owner[];
 
  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getAllBusiness().subscribe(businessList=>{
      console.log(' got list of business', businessList),
      this.businessList=businessList;
     
    })
  }

}
