import {APP_BASE_HREF} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Point} from '../model/Point';

@Injectable()
export class DataService {
  constructor(private http: HttpClient, @Inject(APP_BASE_HREF) private baseHref: string) {
  }

  getData(): Observable<Point[]> {
    return this.http.get<Point[]>(`${this.baseHref}/data/sample.json`);
  }
}
