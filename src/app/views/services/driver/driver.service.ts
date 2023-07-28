import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/payloads/ApiResponse';
import { Driver } from '../../class/driver';


@Injectable({
  providedIn: 'root'
})
export class DriverService {


  constructor( private httpClient:HttpClient) { }


  createDriver = (driver:Driver): Observable<HttpResponse<ApiResponse>> => {
    console.log(driver);

    return this.httpClient.post<ApiResponse>('http://localhost:7004/oms-api/api/v1/driver/save', driver, { observe: 'response' });
  }


  getDriverList(): Observable<Driver[]>{
    return this.httpClient.get<Driver[]>('http://localhost:7004/oms-api/api/v1/driver/getAllDriver');
  }

  updateDriver = (driverId: Number,fullName:string,nic:string,contact:string,address:string,bloodgroup:string): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('driverId', driverId.toString());
    params = params.append('fullName', fullName);
    params = params.append('nic', nic);
    params = params.append('contact', contact);
    params = params.append('address', address);
    params = params.append('bloodgroup', bloodgroup);

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/driver/update/',
      { params: params, observe: 'response' }
    );
  };

  deleteDriver = (driverId: number): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('driverId', driverId.toString());

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/driver/delete/',
      { params: params, observe: 'response' }
    );
  };
}
