import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../services/account-service.service';
import { Account } from '../model/account';


@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  service:AccountServiceService;

  constructor(service:AccountServiceService) { 
    this.service=service;

  }
  ngOnInit(): void {
  }
  account:Account;
  
}
