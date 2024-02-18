import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherDTO } from './model/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather';
  public cityName:string="Tunisia";
  weatherData:WeatherDTO=new WeatherDTO();
  constructor(private weatherservice:WeatherService){}
  ngOnInit(){
    this.getCityWeather(this.cityName);
    this.cityName='';
  }
  getCityWeather(cityName:string) {
    this.weatherservice
    .getWeatherData(this.cityName)
    .subscribe(
     
      ((weatherData)=> (this.weatherData=weatherData))
      );
      
  }
  search(){
    this.getCityWeather(this.cityName);
    this.cityName='';
  }
}
