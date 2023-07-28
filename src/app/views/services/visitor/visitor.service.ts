import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Visitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/payloads/ApiResponse';
import { IApiResponse } from 'src/app/payloads/IApiResponse';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  constructor( private httpClient:HttpClient) { }




  getVisitorList(): Observable<Visitor[]>{
    return this.httpClient.get<Visitor[]>('http://localhost:7004/oms-api/api/v1/visitor/getAllVisitor');
  }
  createVisitor = (leave: any): Observable<HttpResponse<IApiResponse>> => {
    return this.httpClient.post<IApiResponse>('http://localhost:7004/oms-api/api/v1/visitor/save',leave, { observe: 'response' });
  }
  approvalVisitor = (id: Number): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('visitorId', id.toString());

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/visitor/approval/',
      { params: params, observe: 'response' }
    );
  };






}
