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

  selectedGoalkeeper =[];
  selectedAttacker =[];
  selectedMidfielder =[];
  selectedDefenders = [];


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

addGoalkeeper(footballer){
  if(this.selectedGoalkeeper.length < 1){
    this.selectedGoalkeeper.push(footballer);
  }
}

addAttacker(footballer){
  if(this.selectedAttacker.length < 3){
  this.selectedAttacker.push(footballer);
  }
}
addMidfielder(footballer){
  if(this.selectedAttacker.length < 4){
  this.selectedMidfielder.push(footballer);
}
}
addDefender(footballer){
  if(this.selectedAttacker.length < 3){
  this.selectedDefenders.push(footballer);
}
}

  ngOnInit() {
  }

}
