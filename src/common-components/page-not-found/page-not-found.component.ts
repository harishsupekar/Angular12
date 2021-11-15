import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() 
   {
     console.warn("PageNotFoundComponent constructor called!");
   }

  ngOnInit(): void 
  {
    console.warn("PageNotFoundComponent ngOnInit event called!");
  }

}
