import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/payloads/ApiResponse';
import { Booktransport } from '../../class/booktransport';


@Injectable({
  providedIn: 'root',
})
export class BooktransportService {
  constructor(private httpClient: HttpClient) {}
  createBooktransport = (
    booktransport: Booktransport
  ): Observable<HttpResponse<ApiResponse>> => {
    console.log(booktransport);

    return this.httpClient.post<ApiResponse>(
      'http://localhost:7004/oms-api/api/v1/book_transport/save',
      booktransport,
      { observe: 'response' }
    );
  };
}
