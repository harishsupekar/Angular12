import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../security-module/sign-in/sign-in.component';
import { SignUpComponent } from '../security-module/sign-up/sign-up.component';

const securityRoutes: Routes = 
[
    {path:"Sign-In", component:SignInComponent},
    {path:"Register-User", component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(securityRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 //name = "Harish";
}
