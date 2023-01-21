import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com'
  listuser() {
    return this.http.get(`${this.url}/posts?_limit=10`)
  }
}
