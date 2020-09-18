import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { Owner } from './owner';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  ownerList:Owner[];
  
  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.ownerService.getAllOwners().subscribe(ownerList=>{
      console.log(' got list of owners', ownerList)
      this.ownerList=ownerList;
    })
  }

}
