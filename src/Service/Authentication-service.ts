import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from 'src/ModelClasses/UserModel';
import { User } from 'src/ModelClasses/User'; 

@Injectable
({
    providedIn: 'root'
})

  export class AuthenticationService
  {
  url: any = "http://localhost:50000/api/Welcome";
    constructor(private http:HttpClient) 
    {
    }
    GetData():Observable<any>
    {
      return  this.http.get<any>(this.url + '/GetIntData');
    }

    AuthenticateUser(userModel: UserModel):Observable<User>
    {
      const headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'};
      return this.http.post<User>(this.url + '/Authenticate', userModel, {headers});
    }
  }