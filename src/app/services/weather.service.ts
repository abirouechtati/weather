import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDTO } from '../model/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getWeatherData(cityName:string):Observable<WeatherDTO>{
    const appId='85b31eefb15e1923fa4d47bfbbf1a56e'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}`;

    return this.http.get<WeatherDTO>(url);
  }

}
