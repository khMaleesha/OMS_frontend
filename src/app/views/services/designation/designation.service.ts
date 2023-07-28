import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/payloads/ApiResponse';
import { Designation } from '../../class/designation';


@Injectable({
  providedIn: 'root',
})
export class DesignationService {
  constructor(private httpClient: HttpClient) {}

  createDesignation = (
    designation: Designation
  ): Observable<HttpResponse<ApiResponse>> => {
    console.log(designation);

    return this.httpClient.post<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/designation/save',
      designation,
      { observe: 'response' }
    );
  };
  getDesignationList(): Observable<Designation[]> {
    return this.httpClient.get<Designation[]>(
      'http://localhost:7004/oms-api/api/v1/designation/getAllDesignation'
    );
  }

  deleteDesignation = (id: Number): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/designation/delete/',
      { params: params, observe: 'response' }
    );
  };
  updateDesignation = (id: Number,status:string): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('id', id.toString());
    params = params.append('status', status);

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/designation/update/',
      { params: params, observe: 'response' }
    );
  };
}
