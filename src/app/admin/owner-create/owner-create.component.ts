import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Owner } from 'src/app/owner-list/owner';
import { OwnerService } from 'src/app/owner.service';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {


  owner = new Owner();
  submited=false;
  ownerEditForm = new FormGroup({
    ownerName: new FormControl(''), 
    ownerCity:new FormControl(''), 
    ownerStreet:new FormControl(''), 
    ownerPostCode:new FormControl(''), 
    ownerHouseNumber:new FormControl(''), 
    ownerPhone:new FormControl(''), 
  });

  constructor(private ownerService:OwnerService,
    private router:Router) { }

  ngOnInit(): void {
  }
  newOwner():void{
    this.submited=false;
    this.owner=new Owner();
  }
  save(){
    this.ownerService
    .createOwner(this.owner).subscribe(own=>
      {
        console.log(own)
        this.owner=new Owner();
        this.gotoList();
      },
      error=>console.log(error));
  }
gotoList(){
  this.router.navigate(['/admin/owners']);
}
onSubmit(){
  this.submited=true;
  this.save();
}
}
