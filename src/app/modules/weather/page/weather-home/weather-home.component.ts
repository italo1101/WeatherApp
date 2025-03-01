import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from './../../../../models/interface/WeatherDatas.interface';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();

  initialCityName = 'Recife';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void{
    this.getWeatherDatas(this.initialCityName);
  }


  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response: any) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas)
      },
      error: (error: any) => console.log(error)
    })
  }

  onSubmit(): void{
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete();
  }
}
