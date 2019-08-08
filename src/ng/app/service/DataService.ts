import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataRecord} from '../model/DataRecord';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }

  getData(): Observable<DataRecord[]> {
    return this.http.get<DataRecord[]>('/api/data/sample.json');
  }
}
