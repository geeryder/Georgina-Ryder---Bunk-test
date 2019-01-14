import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  
  
  validate(sockForm){
    if (sockForm == "socks"){
      return true;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
