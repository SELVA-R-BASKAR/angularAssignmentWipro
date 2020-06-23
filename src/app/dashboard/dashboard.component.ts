import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  availableBalance: number = 0;
  noOfCards: number = 0;

  constructor(
    private walletService: DataService
  ) { }

  ngOnInit() {
  this.availableBalance = this.walletService.getAvailableBalance();
  this.noOfCards = this.walletService.getNoOfCards();
  console.log(this.availableBalance);
  console.log(this.noOfCards);
  }

}
