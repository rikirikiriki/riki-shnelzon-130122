import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import {Forecast} from '../../interfaces/forecast.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _forecastService: ForecastService) { }

  ngOnInit(): void {

    this._forecastService.getForecastForOneDay("215854")
      .subscribe((forecast: Forecast) => {
        console.log(forecast)
      })
  }

}
