import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IWeather {
  name: string;
  humidity: number;
  temp_min: number;
  temp_max: number;
}


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  londonUrl:string;
  bristolUrl: string;
  romeUrl: string;
  
  constructor(
    private http: HttpClient
    ) {
      this.londonUrl= "http://api.openweathermap.org/data/2.5/weather?id=2643744&appid=f4bbeb8ec1a8fb95591f2cf112aaa575";
      this.bristolUrl= "http://api.openweathermap.org/data/2.5/weather?id=4749005&appid=f4bbeb8ec1a8fb95591f2cf112aaa575"
      this.romeUrl= "http://api.openweathermap.org/data/2.5/weather?id=4219762&appid=f4bbeb8ec1a8fb95591f2cf112aaa575"
      
    }

    getLondonWeather(){
      let londonWeather = this.http.get<IWeather>(this.londonUrl);
      return londonWeather;
    }
    
    getBristolWeather(){
      let bristolWeather = this.http.get<IWeather>(this.bristolUrl);
      return bristolWeather;
    }
    
    getRomeWeather(){
      let romeWeather = this.http.get<IWeather>(this.romeUrl);
      return romeWeather;
    }
    
    
  }
  