import { Component, OnInit } from '@angular/core';
import { Map } from '../model/Map';
import { AccountServiceService } from '../services/account-service.service';


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
  map:Map=null;

  addAccount(form:any){
    let details=form.value;
    let branchId=details.branchId;
    let accountType=details.accountType;
    let accountStatus=details.accountStatus;
    let accountBalance=details.accountBalance;
    let accountInterest=details.accountInterest;
    let lastUpadte= new Date();
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
    this.map=new Map();
    this.map.accountBranchId=branchId;
    this.map.accountType=accountType;
    this.map.accountStatus=accountStatus;
    this.map.accountBalance=accountBalance;
    this.map.accountInterest=accountInterest;
    this.map.lastUpdate=lastUpadte;
    this.map.customerName=customerName;
    this.map.customerAadhar=customerAadhar;
    this.map.customerPan=customerPan;
    this.map.customerDob=cutomerDob;
    this.map.addressLine=addressLine;
    this.map.city=city;
    this.map.state=state;
    this.map.country=country;
    this.map.zipcode=zipcode;

    
    let result=this.service.addAccount(this.map); // adding to the store
    result.subscribe((map1:Map)=>{
      this.map=map1;
    },
    err=>{
    console.log("err="+err);
    } );
    form.reset();
  }

}

     
  
