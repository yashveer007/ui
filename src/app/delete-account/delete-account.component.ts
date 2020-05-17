import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../services/account-service.service';
import { Account } from '../model/account';


@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  service:AccountServiceService;

  constructor(service:AccountServiceService) { 
    this.service=service;

  }


  ngOnInit(): void {
  }

  account:Account;
  deleteAccount(form:any){
    let details=form.value;
    let accountNumber=details.accountNumber;
    
    this.account=new Account();
    
    this.account.accountStatus="Closed";
    

    
    let result=this.service.deleteAccount(this.account); // adding to the store
    result.subscribe((account:Account)=>{
      this.account=account;
    },
    err=>{
    console.log("err="+err);
    } );
    form.reset();
  }
}
