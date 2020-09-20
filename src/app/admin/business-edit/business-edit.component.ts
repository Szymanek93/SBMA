import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from 'src/app/business-list/business';
import { BusinessService } from 'src/app/business.service';

@Component({
  selector: 'app-business-edit',
  templateUrl: './business-edit.component.html',
  styleUrls: ['./business-edit.component.css']
})
export class BusinessEditComponent implements OnInit {

  businessList: Business[];

  businessEditForm = new FormGroup({
    //id:new FormControl(''), 
    businessType: new FormControl(''), 
    businessName:new FormControl(''), 
    businessCity:new FormControl(''), 
    businessPostCode:new FormControl(''), 
    businessStreet:new FormControl(''), 
    businessHouseNumber:new FormControl(''), 
    businessDetails:new FormControl(''), 
    // owner:new FormControl(''), 


  });
  businessId:number;
  business:Business;


  constructor(private route: ActivatedRoute, private router:Router,
    private businessService: BusinessService, 
    private fb:FormBuilder ) {
   }

  ngOnInit(): void {
    this.business=new Business();
    this.businessId=this.route.snapshot.params['id'];

    this.businessService.getBusiness(this.businessId)
    .subscribe(bus=>{
      console.log(bus)
      this.business=bus;
    })
  }

  updateBusiness(){
    this.businessService.updateBusiness(this.businessId,this.business).
    subscribe(bus=>{
      console.log(bus);
      this.business=new Business();
      this.gotoList();
    })
  }
  gotoList(){
    this.router.navigate(['/admin/business']);
  }
  onSubmit(){
    this.updateBusiness()
  }
}
