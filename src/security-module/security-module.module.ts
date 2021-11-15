import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { MaterialModule } from '../material-module/material-module.module';

import { SecurityComponent } from './security.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SecurityRoutingModule } from './security-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from 'src/common-components/page-not-found/page-not-found.component';

@NgModule({
  declarations: 
  [
    SecurityComponent,
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent
  ],
  imports: 
  [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SecurityRoutingModule
  ],
  providers: [],
  bootstrap: [SecurityComponent]
})
export class SecurityModule {

  public constructor()
  {
    console.warn("SecurityModule module constructor called!");
  }
 }
