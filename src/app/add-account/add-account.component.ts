import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../services/account-service.service';
import { Account } from '../model/account';



@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  citys=["Mumbai","chennai","Amroha","Moradabad","kolkata","New Delhi"];
  countries=["India","China","USA","Other"];
  states=["Uttar Pradesh","New Delhi","Madhya Pradesh","Maharastra",];
  accountStatuses=["Open ","close"];

  service:AccountServiceService;

  constructor(service:AccountServiceService) { 
    this.service=service;

  }

  ngOnInit(): void {
  }
  account:Account=null;
  countryHasError=true;

  addAccount(form:any){
    let details=form.value;
    let branchId=details.branchId;
    let accountType=details.accountType;
    let accountStatus=details.accountStatus;
    let accountBalance=details.accountBalance;
    let accountInterest=details.accountInterest;
    let customerName=details.customerName;
    let customerAadhar=details.customerAadhar;
    let customerPan=details.customerPan;
    let customerContact= details.customerContact;
    let cutomerDob=details.cutomerDob;
    let addressLine=details.addressLine;
    let city=details.city;
    let state= details.state;
    let country= details.country;
    let zipcode=details.zipcode;
    this.account=new Account();
    this.account.accountBranchId=branchId;
    this.account.accountType=accountType;
    this.account.accountStatus=accountStatus;
    this.account.accountBalance=accountBalance;
    this.account.accountInterest=accountInterest;
    this.account.customerName=customerName;
    this.account.customerAadhar=customerAadhar;
    this.account.customerPan=customerPan;
    this.account.customerDob=cutomerDob;
    this.account.addressLine=addressLine;
    this.account.city=city;
    this.account.state=state;
    this.account.country=country;
    this.account.zipcode=zipcode;

    
    let result=this.service.addAccount(this.account); // adding to the store
    result.subscribe((account:Account)=>{
      this.account=account;
    },
    err=>{
    console.log("err="+err);
    } );
    form.reset();
  }
  validateCountry(value){
    if(value === 'default'){
      this.countryHasError=true;
    }else{
      this.countryHasError=false;
    }
  }

}

     
  
