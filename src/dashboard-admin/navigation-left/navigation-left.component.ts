import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-left',
  templateUrl: './navigation-left.component.html',
  styleUrls: ['./navigation-left.component.scss']
})
export class NavigationLeftComponent implements OnInit {

  constructor() 
  {
    console.warn("NavigationLeftComponent Constructor loaded!");
  }

  ngOnInit(): void 
  {
    console.warn("NavigationLeftComponent ngOnInit event called!");
  }

}
