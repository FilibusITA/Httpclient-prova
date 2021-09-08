import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiHttpCient';
  val1: number = 3;

  val2: number = 3;

  val3: number = 5;

  val4: number = 5;

  val5: number = 5;

  msg: string = '';
}
