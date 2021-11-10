import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/ModelClasses/User';
import {AuthenticationService} from '../../Service/Authentication-service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit 
{
  intData: any= "";
  errorMessage: string = ""; 
  userObj = new User();

  userModelForm = new FormGroup
  ({
    UserName: new FormControl(''),
    Password: new FormControl('')
  });

  constructor(public authenticate : AuthenticationService) 
  {
    console.warn("Sign-In Constructor called!");
  }

  ngOnInit(): void 
  {
    this.authenticate.GetData().subscribe((a)=>this.intData = a);
  }
 
  Login()
  {
    this.userObj.token = "";
    console.warn(this.userModelForm.value);
    this.authenticate.AuthenticateUser(this.userModelForm.value).subscribe((data)=>this.userObj = data);
    console.warn(this.userObj.token);
  }

}
