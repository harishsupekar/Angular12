import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../security-module/sign-in/sign-in.component';
import { SignUpComponent } from '../security-module/sign-up/sign-up.component';

const securityRoutes: Routes = 
[
    {path:'signin', component:SignInComponent},
    {path:'signup', component:SignUpComponent},
    { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(securityRoutes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule 
{ 
  public constructor()
  {
    console.warn("SecurityRoutingModule constructor called!");
  }
}
