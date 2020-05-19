import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../service/account-service.service';

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

}
