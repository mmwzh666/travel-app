import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

export class TravelRequest {
  public originationAirport: string;
  public destinationAirport: string;
  public regdate: Date;
  public numOfTravelers: number;
  public cost: string;
}

@Component({
  selector: 'app-travelrequest',
  templateUrl: './travelRequest.component_r6.html',
  styleUrls: ['./travelRequest.component.css']
})
export class TravelRequestComponent {
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
