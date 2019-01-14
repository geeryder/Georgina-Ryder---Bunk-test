import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  url:string;
  apiKey:string = "f4bbeb8ec1a8fb95591f2cf112aaa575";

  constructor(
    private http: HttpClient
  ) {
    this.url= "http://api.openweathermap.org/data/2.5/weather?id="
   }

  getWeather(id:string){
    return this.http.get<IWeather>(this.url + id + "&APPID=" + this.apiKey);
  }


}
