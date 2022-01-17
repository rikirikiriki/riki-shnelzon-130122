import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {tap, map} from 'rxjs/operators';
import config from '../../assets/config/config.json';

import {Location} from '../interfaces/location.interface';
import { SessionStorageService } from "./session-storge.service";

@Injectable() 
export class LocationService{


    constructor(private _httpClient: HttpClient, private _storageService: SessionStorageService){

    }


    getLocation(location: string): Observable<Location[]>{

        const sessionStorageKey = `location_${location}`;      
        const storedLocation: Location[] = this._storageService.getDataFromSession<Location[]>(sessionStorageKey);
        
        if(storedLocation) return of(storedLocation);

        const params = new HttpParams()
            .set("apikey", config.apiKey)
            .set("q", location)
            .set("language","en-us");
        return this._httpClient.get(config.locationAutocompelteurl, {params})
            .pipe(map((response: any) => response.map(item => ({...item, "Favorite": false}))))
            .pipe(tap((response: Location[]) => this._storageService.saveDataToSession<Location[]>(sessionStorageKey, response)));


    }
}