import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { QuizComponent } from './quiz/quiz.component';
import { FootballComponent } from './football/football.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'football', component: FootballComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    QuizComponent,
    FootballComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
