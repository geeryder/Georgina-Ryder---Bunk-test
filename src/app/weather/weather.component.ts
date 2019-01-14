import { Component, OnInit } from '@angular/core';
import { WeatherService, IWeather } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  londonWeather;
  bristolWeather;
  romeWeather;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.getLondonWeather().subscribe((londonWeather)=>{
      this.londonWeather = londonWeather
    })
    this.weatherService.getBristolWeather().subscribe((bristolWeather)=>{
      this.bristolWeather = bristolWeather
    })
    this.weatherService.getRomeWeather().subscribe((romeWeather)=>{
      this.romeWeather = romeWeather
    })
  }

}
