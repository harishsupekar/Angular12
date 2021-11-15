import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-footer',
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.scss']
})
export class DashboardFooterComponent implements OnInit {

  constructor() 
  {
    console.warn("DashboardFooterComponent Constructor loaded!");
  }

  ngOnInit(): void 
  {
    console.warn("DashboardFooterComponent ngOnInit event called!");
  }

}
