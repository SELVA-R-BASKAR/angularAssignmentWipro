import { Component, OnInit } from '@angular/core';
import { Card } from '../cards.model';
import { getLocaleDateTimeFormat } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: ['./view-cards.component.css']
})
export class ViewCardsComponent implements OnInit {

  cards: Card[];
  subscription: Subscription;
  createCardClicked: boolean = false;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public cardService: DataService,
  ) { }

  ngOnInit() {
    // this.cards = {
    //   companyName: "Amazon",
    //   cardNumber: 6462343423233323,
    //   currentDate: new Date(),
    //   cardAmount: 4000,
    // }
    this.subscription = this.cardService.cardsChanged
    .subscribe(
     (cards: Card[]) => {
       this.cards = cards;
       console.log(this.cards);
     } 
    );
    this.cards = this.cardService.getCards();
    console.log(this.cards);

  }

createCard() {
  this.createCardClicked = !this.createCardClicked;
  console.log("create card event");
  // this.router.navigate(['viewCards','']);
  this.router.navigate(['createNewCard'], {relativeTo:this.route});
}

onCardCreated(event) {
  console.log("CardCreatedSuccessfully");
  console.log(event);
  this.createCardClicked = !this.createCardClicked;
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
