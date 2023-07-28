import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/payloads/ApiResponse';
import { IApiResponse } from 'src/app/payloads/IApiResponse';
import { Meal } from '../../class/meal';


@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private httpClient: HttpClient) { }

  createMeal = (meal: any): Observable<HttpResponse<IApiResponse>> => {
    return this.httpClient.post<IApiResponse>('http://localhost:7004/oms-api/api/v1/meal/save',meal, { observe: 'response' });
  }

  getMealList(): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(
      'http://localhost:7004/oms-api/api/v1/meal/getAllLeave'
    );
  };
  deleteMeal = (id: Number): Observable<HttpResponse<ApiResponse>> => {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    return this.httpClient.get<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/meal/delete/',
      { params: params, observe: 'response' }
    );
  };

}
