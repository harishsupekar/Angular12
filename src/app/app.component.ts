import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name: any;
  data: string = "one";
  parentData: number[] = [1,2,3,4,5,6,5,4,3,2,2,2];

  UpdateData(item: string)
  {
    console.warn(item);
  }
}
