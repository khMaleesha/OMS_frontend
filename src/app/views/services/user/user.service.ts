import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//  private baseUrl ="http://localhost:7004/user/login"

//  private baseUrl =" http://localhost:7004/oms-api/api/v1/login/user"
 private baseUrl =" http://localhost:3000/api/v1/login/user"
  constructor(private httpClient: HttpClient) { }

  user(user:User):Observable<object>{
    console.log(user)
    return this . httpClient.post('${this.baseUrl}',user);
  }
}
