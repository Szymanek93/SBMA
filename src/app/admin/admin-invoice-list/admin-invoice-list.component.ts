import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InvoiceDTO } from 'src/app/invoice-list/InvoiceDTO';
import { InvoiceService } from 'src/app/invoice.service';

@Component({
  selector: 'app-admin-invoice-list',
  templateUrl: './admin-invoice-list.component.html',
  styleUrls: ['./admin-invoice-list.component.css']
})
export class AdminInvoiceListComponent implements OnInit {

  invoice : Observable<InvoiceDTO[]>;
  invoiceList: InvoiceDTO[];


  constructor( private invoiceService: InvoiceService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe(invoiceList=> {
      console.log('got list of invoice',invoiceList),
      this.invoiceList = invoiceList;
    });
  }

    deleteRaport (id:number){
      this.invoiceService.deleteInvoice(id)
      .subscribe(inv=>{
        console.log(inv);
        this.reloadData();
      })
    }
    reloadData(){
      window.location.reload();
  }
  gotoCreate(){
    this.router.navigate(['/admin/invoice/create'])
  }
  }


