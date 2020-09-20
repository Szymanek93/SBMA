import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Business } from 'src/app/business-list/business';
import { BusinessService } from 'src/app/business.service';

@Component({
  selector: 'app-admin-business-list',
  templateUrl: './admin-business-list.component.html',
  styleUrls: ['./admin-business-list.component.css']
})
export class AdminBusinessListComponent implements OnInit {
  business:Observable<Business[]>;
  businessList:Business[];

  constructor(private businessService: BusinessService, private route: ActivatedRoute, private router:Router,) { }
  
  ngOnInit(): void {
    this.businessService.getAllBusiness().subscribe(businessList=>{
      console.log(' got list of business', businessList),
      this.businessList=businessList;
     
    })
  }

deleteBusiness(id:number){
  this.businessService.deleteBusiness(id)
  .subscribe(bus=>{
    console.log(bus);
    this.reloadData();
  })
}
reloadData(){
  window.location.reload();
}
gotoCreate(){
  this.router.navigate(['/admin/business/create'])
}
}