import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/DataService';
import {Observable} from 'rxjs';
import {DataRecord} from '../model/DataRecord';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data$: Observable<DataRecord[]>;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
  }

}
