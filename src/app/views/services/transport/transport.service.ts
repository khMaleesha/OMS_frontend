import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from 'src/app/payloads/IApiResponse';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private httpClient:HttpClient) { }
  createTransport = (device: any): Observable<HttpResponse<IApiResponse>> => {
    return this.httpClient.post<IApiResponse>('http://localhost:7004/oms-api/api/v1/transport/save',device, { observe: 'response' });
  }
}
