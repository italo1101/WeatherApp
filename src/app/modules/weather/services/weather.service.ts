import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../enviroments'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = environment.weatherApiKey;

  constructor(private http: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&node=json&appid=${this.apiKey}`, {})
  }
}
