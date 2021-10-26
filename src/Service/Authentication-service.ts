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

    AuthenticateUser(userModel: UserModel):Observable<any>
    {
      //Access-Control-Allow-Origin: *

      debugger;
      const body = { data: userModel };
      const headers = { 'Access-Control-Allow-Origin': '*'};
      
      return  this.http.get<any>(this.url + '/Get');
      return  this.http.post<any>(this.url + '/Authenticate', body, {headers});
    }
  }