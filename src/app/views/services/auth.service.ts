import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from 'src/app/payloads/IApiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_URL = environment.authUrl

  constructor(private http: HttpClient) { }

  authenticate = (username: string, password: string): Observable<HttpResponse<IApiResponse>> => {
    return this.http.post<IApiResponse>(this.AUTH_URL, { usernameOrEmail: username, password: password }, { observe: 'response' });
  }

  isLoggedIn = () => {
    return !!sessionStorage.getItem('user');
  }

  getPermissions = () => {
    let user: any = JSON.parse(sessionStorage.getItem('user') || '{}');
    let permissions: any = user.permissions;
    return permissions;
  }
}
