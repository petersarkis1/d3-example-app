import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  graph: any = {
    data: {
      'Series 1': [
        { x: 1, y: 25 },
        { x: 2, y: 8 },
        { x: 4, y: 10 },
        { x: 5, y: 7 }
      ],
      'Series 2': [
        { x: 1, y: 3 },
        { x: 2, y: 16 },
        { x: 3, y: 16 },
        { x: 6, y: 16 },
      ],
      'Series 3': [
        { x: 1, y: 30 },
        { x: 2, y: 6 },
        { x: 3, y: 20 },
        { x: 4, y: 8 },
        { x: 5, y: 5 }
      ]
    }
  }

}
