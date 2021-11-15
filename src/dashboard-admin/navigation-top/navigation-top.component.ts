import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.scss']
})
export class NavigationTopComponent implements OnInit {

  constructor() 
  {
    console.warn("NavigationTopComponent Constructor loaded!");
  }

  ngOnInit(): void 
  {
    console.warn("NavigationTopComponent ngOnInit event called!");
  }

}
