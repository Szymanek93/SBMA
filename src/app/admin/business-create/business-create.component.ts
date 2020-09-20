import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Business } from 'src/app/business-list/business';
import { BusinessService } from 'src/app/business.service';
import { Owner } from 'src/app/owner-list/owner';
import { OwnerService } from 'src/app/owner.service';

@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.css']
})
export class BusinessCreateComponent implements OnInit {

  ownerList:Owner[];
  business : Business=new Business();
  submited=false;

  constructor(private businessService:BusinessService, private ownerService:OwnerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllOwners();
  }
  newBusiness():void{
    this.submited=false;
    this.business=new Business();
  }
  save(){
    this.businessService
    .createBusiness(this.business).subscribe(bus=>
      {
        console.log(bus)
        this.business=new Business();
        this.gotoList();
      },
      error=>console.log(error));
  }
gotoList(){
  this.router.navigate(['/admin/business']);
}
onSubmit(){
  this.submited=true;
  this.save();
}
getAllOwners(){
  this.ownerService.getAllOwners().subscribe(ownerList=>{
    console.log(' got list of owners', ownerList)
    this.ownerList=ownerList;
  })
}
}
