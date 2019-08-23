import {Component, OnInit} from '@angular/core';
import {Point} from '../model/Point';
import {DataService} from '../service/DataService';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data$: Observable<Point[]>;

  minX: number;
  maxX: number;
  minY: number;
  maxY: number;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
    this.minX = this.minY = 0;
    this.maxX = this.maxY = 1000;
  }
}
