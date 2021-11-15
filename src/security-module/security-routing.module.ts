import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from 'src/dashboard-admin/dashboard-admin.component';
import { SignInComponent } from '../security-module/sign-in/sign-in.component';
import { SignUpComponent } from '../security-module/sign-up/sign-up.component';
import { PageNotFoundComponent } from 'src/common-components/page-not-found/page-not-found.component';

const securityRoutes: Routes = 
[
    {path:'', redirectTo:'/signin', pathMatch: 'full'},  //for empty URL (empty path),display login complnent
    {path:'signin', component:SignInComponent},
    {path:'signup', component:SignUpComponent},
    {path:'dashboard-admin', component:DashboardAdminComponent},
    {path: '**', component:PageNotFoundComponent }  //wildcard route, incase of no matched to any path, show pagenotfound component    
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
