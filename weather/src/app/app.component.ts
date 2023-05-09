import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './Models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'weather';
  cityName="Zocca";
  temp!: number;
  constructor(private weather:WeatherService) { }
  weatherZoneData: weatherData | undefined;
  ngOnInit() {
    this.getZoneWeatherData(this.cityName);
  }
  hotWeather(){
    if(this.temp > 14 && this.temp <50){
        return true
    }
    else{
      return false;
    }
  }
  coldWeather() {
    if(this.temp < 13){
      return true;
    }
    else{
      return false;
    }
  }
  private getZoneWeatherData(cityName:string){
    this.weather.getWeatherData('Zocca').subscribe({
      next:(response) => {
        this.weatherZoneData = response;
      }
  })
  }
  seachCity(){
    this.getZoneWeatherData(this.cityName);
  }
  }



