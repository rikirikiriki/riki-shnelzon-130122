
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {tap} from 'rxjs/operators'


import config from '../../assets/config/config.json'
import { Forecast } from '../interfaces/forecast.interface';

@Injectable()
export class ForecastService {
    
    private readonly _oneDaySessionKey = "oneDay_";
    private readonly _fiveDaysSessionKey = "fiveDays_";


    constructor(private _httpClient: HttpClient){
    }
    
    private _saveDataToSession<T>(key: string, data: T): void{
        if(!sessionStorage.hasOwnProperty(key)){
            sessionStorage.setItem(key, JSON.stringify(data));
        }
    }

    private _getDataFromSession<T>(key: string): T{
        const data: T = JSON.parse(sessionStorage.getItem(key)); 
        return data; 
    }

    getForecastForOneDay(location: string): Observable<Forecast>{
        const key = this._oneDaySessionKey + location;
        const forecast = this._getDataFromSession<Forecast>(key);

        if(forecast) return of(forecast) ;

        const params = new HttpParams()
            .set("apikey", config.apiKey)
            .set("language", "he-il")
            .set("details", "true")
            .set("metric", "true");
        return this._httpClient.get(`${config.forecastApiOneDayUrl}/${location}`, { params} )
            .pipe(tap((response: Forecast) => {
                this._saveDataToSession<Forecast>(key, response);
            }));
    }

    getForecastForFiveDays(){

    }





}