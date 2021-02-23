import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from 'src/app/business-list/business';
import { BusinessDTO } from 'src/app/business-list/businessDTO';
import { BusinessService } from 'src/app/business.service';
import { Owner } from 'src/app/owner-list/owner';
import { OwnerService } from 'src/app/owner.service';


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
    ownerId:new FormControl(''), 


  });
  ownerList:Owner[];
  businessId:number;
  businessDTO : BusinessDTO= new BusinessDTO;


  constructor(private route: ActivatedRoute, private router:Router,
    private businessService: BusinessService, private ownerService:OwnerService,
    private fb:FormBuilder ) {
   }

  ngOnInit(): void {
    this.getAllOwners();
    this.businessDTO=new BusinessDTO();
    this.businessId=this.route.snapshot.params['id'];

    this.businessService.getBusiness(this.businessId)
    .subscribe(bus=>{
      console.log(bus)
      this.businessDTO=bus;
    })
  }

  getAllOwners(){
    this.ownerService.getAllOwners().subscribe(ownerList=>{
      console.log(' got list of owners', ownerList)
      this.ownerList=ownerList;
    })
}

  updateBusiness(){
    this.businessService.updateBusiness(this.businessId,this.businessDTO).
    subscribe(bus=>{
      console.log(bus);
      this.businessDTO=new BusinessDTO();
      this.gotoList();
    },
    error=>console.log(error));
      }
  gotoList(){
    this.router.navigate(['/admin/businesses']);
  }

  
  onSubmit(){
    this.updateBusiness()
  }

  
}
