import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  SignUpFormGroup = new FormGroup
  ({
    firstName: new FormControl(''),
    lastName:new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    emailId: new FormControl(''),
    DOB: new FormControl('')
  })
  constructor() 
  {
    console.warn("Sign-Up component loaded!");
  }

  ngOnInit(): void {
  }

}
