import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epl',
  templateUrl: './epl.component.html',
  styleUrls: ['./epl.component.css']
})
export class EplComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clubs = ['Arsenal', 'Aston Villa', 'Brentford', 'Brighton & Hove Albion', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle United', 'Norwich City', 'Southampton', 'Tottenham Hotspur', 'Watford', 'West Ham United', 'Wolves']
}
