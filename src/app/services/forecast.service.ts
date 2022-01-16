
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {tap, map} from 'rxjs/operators';

import { Forecast } from '../interfaces/forecast.interface';

@Injectable()
export class ForecastService {
    


    constructor(private _httpClient: HttpClient){
    }
    
    private _saveDataToSession(key: string, data: Forecast): void{
        if(!sessionStorage.hasOwnProperty(key)){
            sessionStorage.setItem(key, JSON.stringify(data));
        }
    }

    private _getDataFromSession(key: string): Forecast {
        const data: Forecast = JSON.parse(sessionStorage.getItem(key)); 
        return data; 
    }



    getForecast(location: string, sessionStorageKey: string, url: string, apiKey: string): Observable<Forecast>{
        const forecast = this._getDataFromSession(sessionStorageKey);

        if(forecast) return of(forecast);

        const params = new HttpParams()
            .set("apikey", apiKey)
            .set("language", "en-us")
            .set("details", "false")
            .set("metric", "true");
        return this._httpClient.get(`${url}/${location}`, {params})
            .pipe(map((response: any) => response["DailyForecasts"].map((item: Forecast) => ({...item, "favorite": false}))))
            .pipe(tap((forecasts: Forecast[]) => {            
                this._saveDataToSession(sessionStorageKey, forecasts)
            }))
        


    }





}