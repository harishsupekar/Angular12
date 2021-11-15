import { Component, OnInit } from '@angular/core';

@Component
({
  selector: 'dashboardUser-footer',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  constructor() 
  {
    console.warn("DashboardAdminComponent Constructor loaded!");
   }

  ngOnInit(): void 
  {
    console.warn("DashboardAdminComponent ngOnInit event called!");
  }

}
