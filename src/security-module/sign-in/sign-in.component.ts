import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../../ModelClasses/UserModel';
import { User } from 'src/ModelClasses/User';
import {AuthenticationService} from '../../Service/Authentication-service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit 
{
  userData: any = "";

  userModelForm = new FormGroup
  ({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void 
  {
    console.warn("sign upm called!!");
  }
  
  constructor(public authenticate : AuthenticationService) 
  {
    console.warn("Sign-In Constructor called!");
  }

  Login():void
  {
    debugger;
    console.warn(this.userModelForm.value);
    this.authenticate.AuthenticateUser(this.userModelForm.value).subscribe((data)=>this.userData = data);
    console.warn(this.userData);
  }

}
