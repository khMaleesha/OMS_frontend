import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/payloads/ApiResponse';
import { IApiResponse } from 'src/app/payloads/IApiResponse';
import { Employee } from '../../class/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private httpClient:HttpClient) { }



  createEmployee = (employee:Employee): Observable<HttpResponse<ApiResponse>> => {
    console.log(employee);

    return this.httpClient.post<ApiResponse>('http://localhost:7004/oms-api/api/v1/employee/save', employee, { observe: 'response' });
  }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>('http://localhost:7004/oms-api/api/v1/employee/getAllEmployee');
  }

  getEmployee = (id:any): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('emp', id.toString());

    return this.httpClient.get<ApiResponse>('http://localhost:7004/oms-api/api/v1/employee/searchEno', { params: params, observe: 'response' });

 }


  downloadEmployeeReport = (): Observable<HttpResponse<IApiResponse>> => {
    let params = new HttpParams();

    return this.httpClient.get<IApiResponse>('http://localhost:7004/oms-api/api/v1/employee/download/excel', { params: params, observe: 'response' })

  }
  deleteEmployee = (employeeId: number): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('employeeId', employeeId.toString());

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/employee/delete/',
      { params: params, observe: 'response' }
    );
  };

}
