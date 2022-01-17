import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ForecastService } from 'src/app/services/forecast.service';
import config from '../../services/config.service' ;
import {Forecast} from '../../interfaces/forecast.interface';
import {Location} from '../../interfaces/location.interface';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locations$: Observable<Location>; 
  locations = [
    {
      "Version": 1,
      "Key": "215854",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
  }
  
  ]

  private readonly _fiveDaysSessionKey = "fiveDays_";
  private readonly _telAvivLocationId = "215854";

  constructor(private _forecastService: ForecastService) { 
    
  }

  ngOnInit(): void {

    const defaultLocation = this._telAvivLocationId;
    const sessionStorageKey = this._fiveDaysSessionKey + this._telAvivLocationId;
    this._forecastService.getForecast(defaultLocation, sessionStorageKey, config.forecastApiFiveDaysUrl, config.apiKey)
      .subscribe((forecast: Forecast) => {
        
      })
  }

}
