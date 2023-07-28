import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/payloads/ApiResponse';
import { Personalgatepass } from '../class/personalgatepass';


@Injectable({
  providedIn: 'root'
})
export class PersonalgatepassService {

  constructor( private httpClient:HttpClient) { }



  createPersonalgatepass = (personalgatepass:Personalgatepass): Observable<HttpResponse<ApiResponse>> => {
    console.log(personalgatepass);

    return this.httpClient.post<ApiResponse>('http://localhost:7004/oms-api/api/v1/personalgatepass/save', personalgatepass, { observe: 'response' });
  }


  getPersonalgatepassList= ( appLevl :Number): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('appLevl', appLevl.toString());

    return this.httpClient.get<ApiResponse>('http://localhost:7004/oms-api/api/v1/personalgatepass/getAllpersonalgatepass', { params: params, observe: 'response' });

 }
  getPersonalgatepass= (id:any): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('emp', id.toString());

    return this.httpClient.get<ApiResponse>('http://localhost:7004/oms-api/api/v1/personalgatepass/searchEno', { params: params, observe: 'response' });

 }

 createSecurityPersonalgatepass = (personalsecuritygatepass:Personalgatepass): Observable<HttpResponse<ApiResponse>> => {
  console.log(personalsecuritygatepass);

  return this.httpClient.post<ApiResponse>('http://localhost:7004/oms-api/api/v1/security_personalgatepass/save', personalsecuritygatepass, { observe: 'response' });
}

approvalPersonalgatepass = (id: Number,aprovalLevel :Number): Observable<HttpResponse<ApiResponse>> => {
  let params = new HttpParams();
  params = params.append('personalgatepassId', id.toString());
  params = params.append('aprovalLevel', aprovalLevel.toString());

  return this.httpClient.get<ApiResponse>(
    'http://localhost:7004/oms-api/api/v1/personalgatepass/approval/departmenthead/',
    { params: params, observe: 'response' }
  );
};

finalapprovalPersonalgatepass = (id: Number,aprovalLevel :Number): Observable<HttpResponse<ApiResponse>> => {
  let params = new HttpParams();
  params = params.append('personalgatepassId', id.toString());
  params = params.append('aprovalLevel', aprovalLevel.toString());

  return this.httpClient.get<ApiResponse>(
    'http://localhost:7004/oms-api/api/v1/personalgatepass/approval/approved/',
    { params: params, observe: 'response' }
  );
};


}
