import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/payloads/ApiResponse';
import { IApiResponse } from 'src/app/payloads/IApiResponse';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor( private httpClient:HttpClient) { }

  createDevice = (device: any): Observable<HttpResponse<IApiResponse>> => {
    return this.httpClient.post<IApiResponse>('http://localhost:7004/oms-api/api/v1/device/save',device, { observe: 'response' });
  }
  getDevice= (id:any): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('emp', id.toString());

    return this.httpClient.get<ApiResponse>('http://localhost:7004/oms-api/api/v1/device/searchEno', { params: params, observe: 'response' });

 }
 handoverDevice = (id: Number): Observable<HttpResponse<ApiResponse>> => {
  let params = new HttpParams();
  params = params.append('deviceId', id.toString());

  return this.httpClient.get<ApiResponse>(
    'http://localhost:7004/oms-api/api/v1/device/approval/',
    { params: params, observe: 'response' }
  );
};



}
