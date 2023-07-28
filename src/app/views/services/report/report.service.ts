import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { IApiResponse } from "src/app/payloads/IApiResponse";



@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient) { }

downloadDeparmentReport = (): Observable<HttpResponse<IApiResponse>> => {
  let params = new HttpParams();
  // params = params.append('startDate', startDate)

  return this.http.get<IApiResponse>('http://localhost:7004/oms-api/api/v1/department/download', { params: params, observe: 'response' })

}
downloadDesignationReport = (): Observable<HttpResponse<IApiResponse>> => {
  let params = new HttpParams();
  // params = params.append('startDate', startDate)

  return this.http.get<IApiResponse>('http://localhost:7004/oms-api/api/v1/designation/download', { params: params, observe: 'response' })

}
downloadEmployeeReport = (): Observable<HttpResponse<IApiResponse>> => {
  let params = new HttpParams();
  // params = params.append('startDate', startDate)

  return this.http.get<IApiResponse>('http://localhost:7004/oms-api/api/v1/employee/download/excel', { params: params, observe: 'response' })

}
}
