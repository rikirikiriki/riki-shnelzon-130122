import { Injectable } from "@angular/core";


@Injectable()
export class SessionStorageService{

    saveDataToSession<T>(key: string, data: T): void{
        if(!sessionStorage.hasOwnProperty(key)){
            sessionStorage.setItem(key, JSON.stringify(data));
        }
    }

    getDataFromSession<T>(key: string): T {
        const data: T = JSON.parse(sessionStorage.getItem(key)); 
        return data; 
    }
}