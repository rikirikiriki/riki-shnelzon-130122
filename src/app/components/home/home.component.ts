import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import {Forecast} from '../../interfaces/forecast.interface'
import config from '../../services/config.service' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private readonly _fiveDaysSessionKey = "fiveDays_";
  private readonly _telAvivLocationId = "215854";

  constructor(private _forecastService: ForecastService) { }

  ngOnInit(): void {

    const defaultLocation = this._telAvivLocationId;
    const sessionStorageKey = this._fiveDaysSessionKey + this._telAvivLocationId;
    this._forecastService.getForecast(defaultLocation, sessionStorageKey, config.forecastApiFiveDaysUrl, config.apiKey)
      .subscribe((forecast: Forecast) => {
        
      })
  }

}
