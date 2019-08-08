import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Point} from '../model/Point';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }

  getData(): Observable<Point[]> {
    return this.http.get<Point[]>('/data/sample.json');
  }
}
