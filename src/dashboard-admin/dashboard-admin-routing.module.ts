import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from 'src/dashboard-admin/dashboard-admin.component';
import { PageNotFoundComponent } from 'src/common-components/page-not-found/page-not-found.component';

const DashboardAdminRoutes: Routes = 
[
    {path:'dashboard-admin', component:DashboardAdminComponent},
    {path: '**', component:PageNotFoundComponent }  //wildcard route, incase of no matched to any path, show pagenotfound component    
];

@NgModule({
  imports: [RouterModule.forRoot(DashboardAdminRoutes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule 
{ 
  public constructor()
  {
    console.warn("DashboardAdminRoutingModule constructor called!");
  }
}
