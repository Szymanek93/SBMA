import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'src/app/owner-list/owner';
import { OwnerService } from 'src/app/owner.service';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {

  ownerList:Owner[];
  ownerEditForm = new FormGroup({
    ownerName: new FormControl(''), 
    ownerCity:new FormControl(''), 
    ownerStreet:new FormControl(''), 
    ownerPostCode:new FormControl(''), 
    ownerHouseNumber:new FormControl(''), 
    ownerPhone:new FormControl(''), 
  });

  ownerId:number;
  owner:Owner;

  constructor(private route: ActivatedRoute, private router:Router,
    private ownerService: OwnerService, 
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.owner=new Owner();
    this.ownerId=this.route.snapshot.params['id'];

    this.ownerService.getOwners(this.ownerId)
    .subscribe(own=>{
      console.log(own)
      this.owner=own;
    })
  }

  updateOwner(){
    this.ownerService.updateOwner(this.ownerId,this.owner).
    subscribe(own=>{
      console.log(own);
      this.owner=new Owner();
      this.gotoList();
    })
  }
  gotoList(){
    this.router.navigate(['/admin/owners']);
  }
  onSubmit(){
    this.updateOwner()
  }
}