import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboardUser-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() 
  {
    console.warn("UserListComponent Constructor loaded!");
  }

  ngOnInit(): void 
  {
    console.warn("UserListComponent ngOnInit event called!");
  }

}
