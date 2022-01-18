import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/interfaces/forecast.interface';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  constructor() { }
  @Input() forecast: Forecast;

  ngOnInit(): void {
  }

}
