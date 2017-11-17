import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LocationService {

  constructor(private http: Http) {
  }

  getCountries() {
    return this.http.get('https://api.myjson.com/bins/uc7qb');
  }

  getPhones() {
    return this.http.get('https://api.myjson.com/bins/8wlyb');
  }

  getIp() {
    return this.http.get('http://ipinfo.io');
  }

}
