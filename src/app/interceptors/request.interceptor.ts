import { Injectable, OnInit } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AuthAccessTokenSession } from '../session.services/access-key.session';

@Injectable()
export class AuthInterceptor implements HttpInterceptor, OnInit {
  constructor(private authAccessTokenSession: AuthAccessTokenSession) { }

  ngOnInit(): void {
    this.getAccessToken()
  }

  accessToken: string = '';

  getAccessToken() {
    // Fetch the initial session storage value
    this.accessToken = sessionStorage.getItem('access-token') || '';
    console.log(this.accessToken)
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.getAccessToken()
    console.log("Bearer token added by interceptor: ", this.accessToken)
    // Get the token
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MDIyNjUwMywiZXhwIjoxNjkwODMxMzAzfQ.EAlbjyp0SUX63NB_hAs-57crLUwrS16VY5b78NfBP9I';
    const token = this.accessToken

    // Clone the request and add the Authorization header with the bearer token
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Continue with the modified request
    return next.handle(request);
  }
}
