import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  client:HttpClient ;
  constructor(client:HttpClient ){
  this.client=client;
  }

   baseUrl="http://localhost:8082";

 /**
  * fires post request to server with employee as body
  * 
  * @param Map 
  */
   addAccount(account:Account): Observable<Account>{
    let url=this.baseUrl+"/addAccount";
    let result:Observable<Account>= this.client.post<Account>(url,map);
    return result;
   }
  
  
   /**
    * fires delete request to server to delete employee by id mentioned in url
   * @param Map of employee which has to be deleted
   */
   deleteAccount(account:Account): Observable<Account>{
    let url=this.baseUrl+"/deleteAccount";
     let result:Observable<Account>=this.client.put<Account>(url,account);
     return result;
   }
}
