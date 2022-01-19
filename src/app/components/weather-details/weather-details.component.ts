import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/interfaces/forecast.interface';
import { ForecastService } from 'src/app/services/forecast.service';
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() forecasts: Forecast[];
  @Input() city: string;
  @Input() locationId: number;
  todayWeather: Forecast;
  

  constructor(private _forecastService: ForecastService) { }

  ngOnInit(): void {
    this.todayWeather = this.forecasts[0];
    console.log(this.todayWeather)

    this._forecastService.forecastSelected$.subscribe((forecast: Forecast) => this.todayWeather = forecast);

  }

}