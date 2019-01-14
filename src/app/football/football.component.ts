import { Component, OnInit } from '@angular/core';
import * as footballers from '../../assets/footballers.json';


@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {
  footballers;
  defenderArray = [];


  constructor() { 
    this.footballers = footballers.default
    this.sortPlayers(this.footballers);
  }

  sortPlayers(footballers){
    for (let footballer = 0; footballer < footballers.length; footballer++) {
      if (footballers[footballer].position == "Defender"){
        this.defenderArray.push(footballers[footballer]);
      }
    }
  }

  ngOnInit() {
  }

}
