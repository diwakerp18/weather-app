import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwapiService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get (
      'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=25eeaeb3d61c10de3c77839f56c2492f'
    );
  }

}
