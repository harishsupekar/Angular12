import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private fb:FormBuilder)
  {
    console.warn("SignUpComponent Constructor loaded!");
  }
  
  SignUpFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    emailId: ['', Validators.required],
    DOB: ['', Validators.required]
  });

  ngOnInit(): void 
  {
    console.warn("SignUpComponent ngOnInit event called!"); 
  }

  // SignUpFormGroup = new FormGroup
  // ({
  //   firstName: new FormControl('', Validators.required),
  //   lastName:new FormControl('', Validators.required),
  //   userName: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', Validators.required),
  //   emailId: new FormControl('', Validators.required),
  //   DOB: new FormControl('', Validators.required)
  // })

}
