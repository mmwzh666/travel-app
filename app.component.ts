import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Zeheng Wu's Travel Cost Calculator";


  oriAirport: string = 'Your Origin';
  desAirport: string = 'Your destination';
  date: Date;
  travelers: number = 0;
  cost: number = 0;

  travelCost(): void {
    this.cost = this.travelers * 150;
  }
}
