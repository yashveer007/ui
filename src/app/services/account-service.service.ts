import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  client:HttpClient ;
  constructor(client:HttpClient ){
  this.client=client;
  }

   baseEmployeeUrl="http://localhost:8082";

 /**
  * fires post request to server with employee as body
  * 
  * @param emp 
  */
  // addEmployee(emp:Employee): Observable<Employee>{
  // let url=this.baseEmployeeUrl+"/add";
  // let result:Observable<Employee>= this.client.post<Employee>(url,emp);
  // return result;
  // }
  
  /**
   * fires get request to server to fetch all employees
   */
  // fetchAllEmployees():Observable<Employee[]>
  // {
  //   let url=this.baseEmployeeUrl;
  //   let observable:Observable<Employee[]> =this.client.get<Employee[]>(url);
  //   return observable;
  // }
  // /**
  //  * fires get request to server to fetch employee for id mentioned in url
  //  * @param id of employee which has to be fetched
  //  */
  // findEmployeeById(id:number):Observable<Employee>{
  //   let url=this.baseEmployeeUrl+'/get/'+id;
  //   let observable:Observable<Employee> =this.client.get<Employee>(url);
  //   return observable;  
  // }

  // /**
  //  * fires delete request to server to delete employee by id mentioned in url
  //  * @param id of employee which has to be deleted
  //  */
  // deleteEmployeeById(id:number){
  //   let url=this.baseEmployeeUrl+"/delete/"+id;
  //   let result:Observable<boolean>=this.client.delete<boolean>(url);
  //   return result;
  // }
}
