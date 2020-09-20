import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Owner } from 'src/app/owner-list/owner';
import { OwnerService } from 'src/app/owner.service';

@Component({
  selector: 'app-admin-owner-list',
  templateUrl: './admin-owner-list.component.html',
  styleUrls: ['./admin-owner-list.component.css']
})
export class AdminOwnerListComponent implements OnInit {

  owner: Observable<Owner[]>;
  ownerList:Owner[];
  
  constructor(private ownerService: OwnerService,private route: ActivatedRoute, private router:Router,) { }

  ngOnInit(): void {
    this.ownerService.getAllOwners().subscribe(ownerList=>{
      console.log('got list of owners', ownerList ),
      this.ownerList= ownerList
    })
    
  }

  deleteOwner(id:number){
    this.ownerService.deleteOwner(id)
    .subscribe(own=>{
      console.log(own);
      this.reloadData();
    })
  }
  reloadData(){
    window.location.reload();
  }
  gotoCreate(){
    this.router.navigate(['/admin/owners/create'])
  }
  }



