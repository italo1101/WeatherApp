import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '05260c0a53dde04f0e813a92b1f58342';

  constructor(private http: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&node=json&appid=${this.apiKey}`, {})
  }
}
