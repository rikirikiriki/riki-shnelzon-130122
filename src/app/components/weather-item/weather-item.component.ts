import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/interfaces/forecast.interface';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  constructor(private _forecastService: ForecastService) { }
  @Input() forecast: Forecast;

  ngOnInit(): void {
  }

  forecastSelected(event: PointerEvent): void{
    this._forecastService.notifyForecastItemSelected(this.forecast);
    console.log(event);
    const selectedClassName = "selected";
    const selectedElements = document.querySelectorAll(`.${selectedClassName}`);
    selectedElements.forEach(e => e.classList.remove(selectedClassName));
    (event.target as HTMLElement).classList.add(selectedClassName);
  }

}
