import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {DashboardAdminRoutingModule } from './dashboard-admin-routing.module'

import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { NavigationLeftComponent } from './navigation-left/navigation-left.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';

@NgModule({
  declarations: 
  [
    NavigationTopComponent,
    NavigationLeftComponent,
    UserListComponent,
    DashboardFooterComponent
  ],
  imports: 
  [
    CommonModule,
    Router,
    RouterModule,
    DashboardAdminRoutingModule
  ]
})
export class DashboardAdminModule { }