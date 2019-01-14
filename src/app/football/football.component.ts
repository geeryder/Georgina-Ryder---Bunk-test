import { Component, OnInit } from '@angular/core';
import * as footballers from '../../assets/footballers.json';


@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {
  footballers;
  defenders = [];
  goalkeepers =[];
  midfielders = [];
  attacker =[];


  constructor() { 
    this.footballers = footballers.default
    this.sortPlayers(this.footballers);
  }

  sortPlayers(footballers){
    for (let footballer = 0; footballer < footballers.length; footballer++) {
      if (footballers[footballer].position == "Defender"){
        this.defenders.push(footballers[footballer]);
      }
      else if (footballers[footballer].position =="Midfielder"){
        this.midfielders.push(footballers[footballer]);
      }
      else if (footballers[footballer].position =="Attacker"){
        this.attacker.push(footballers[footballer]);
      }
      else if (footballers[footballer].position =="Goalkeeper"){
        this.goalkeepers.push(footballers[footballer]);
  }
}
}

  ngOnInit() {
  }

}
