import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/payloads/ApiResponse';
import { Department } from '../../class/department';


@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private httpClient: HttpClient) {}

  private baseURL = 'http://localhost:7004/oms-api/api/v1/department';

  createDepartment = (
    department: Department
  ): Observable<HttpResponse<ApiResponse>> => {
    console.log(department);

    return this.httpClient.post<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/department/save',
      department,
      { observe: 'response' }
    );
  };

  deleteDepartment = (id: Number): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/department/delete/',
      { params: params, observe: 'response' }
    );
  };

  getDepartmentList(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(
      'http://localhost:7004/oms-api/api/v1/department/getAllDepartment'
    );
  };

  updateDepartment = (id: Number,status:string): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('id', id.toString());
    params = params.append('status', status);

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/department/update/',
      { params: params, observe: 'response' }
    );
  };
}
