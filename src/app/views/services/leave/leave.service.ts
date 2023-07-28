import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/payloads/ApiResponse';
import { IApiResponse } from 'src/app/payloads/IApiResponse';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  constructor(private httpClient: HttpClient) {}



  createLeave = (leave: any): Observable<HttpResponse<IApiResponse>> => {
    return this.httpClient.post<IApiResponse>('http://localhost:7004/oms-api/api/v1/leave_application/save',leave, { observe: 'response' });
  }


  deleteLeave = (id: Number): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/leave/delete/',
      { params: params, observe: 'response' }
    );
  };
  approvalLeave = (id: Number): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('leaveId', id.toString());

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/leave_application/approval/',
      { params: params, observe: 'response' }
    );
  };
  getLeaveList = (): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();


    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/leave_application/getAllLeave',
      { params: params, observe: 'response' }
    );
  };


}
