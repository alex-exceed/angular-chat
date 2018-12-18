import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const SERVER_URL = 'http://localhost:8080';

@Injectable()
export class TransportService {

  constructor(private http: HttpClient) {
  }

  public send(method: string, endpoint: string, payload?: object): any {
    return this.http[method](SERVER_URL + endpoint, payload);
  }
}
