import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.warn("sign upm called!!");
  }

}
