import { Injectable } from '@angular/core';
import { Wallet } from '../my-wallet.model';
import { Card } from '../cards.model';
import { Subject } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // to detect any change and reflect current subscription value
  cardsChanged = new Subject<Card[]>();
  availableBalance: number = 0;
  noOfCards: number = 0;
  private cards: Card[];
  userDetails: User;

  loadCards(userName) {
    //cardService loaded initially based on user logged In
    if (userName == "walletuser2") {
      this.cards = [
        new Card(
          'Kindle subscription',
          '5459 6066 5458 0156',
          '02/2050',
          5000
        ),
        new Card(
          'Drop shopping',
          '4569 5879 5785 3258',
          '08/2050',
          1200
        ),
      ];
    }
    else if (userName == "walletuser3") {
      this.cards = [
        new Card(
          'Kindle subscription',
          '5459 6066 5458 0156',
          '02/2050',
          5000
        ),
        new Card(
          'Drop shopping',
          '4569 5879 5785 3258',
          '08/2050',
          1200
        ),
        new Card(
          'Jackie chan',
          '4257 6548 6520 4528',
          '11/2050',
          10000
        ),
      ];
    }
    else if (userName == "walletuser1") {
      this.cards = [
        new Card(
          'Amazon',
          '4100 0000 0000 0000',
          '10/2020',
          4000
        ),
        new Card(
          'GooglePay',
          '5200 0000 0000 0000',
          '09/2022',
          8000
        ),
        new Card(
          'PayPal',
          '9200 0000 0000 0000',
          '02/2021',
          2000
        ),
      ]
    }
  }

  //to Add a new card
  addCard(card: Card) {
    this.cards.push(card);
    this.cardsChanged.next(this.cards.slice());
  }

  //to add multiple cards
  setCards(cards: Card[]) {
    this.cards = cards;
    this.cardsChanged.next(this.cards.slice());
  }

  //to get all cards
  getCards() {
    return this.cards.slice();
  }

  //to get a particular card with index
  getCard(index: number) {
    return this.cards[index];
  }

  //to update card - topUpCard
  updateCard(index: number, newCard: Card) {
    this.cards[index] = newCard;
    this.cardsChanged.next(this.cards.slice());
  }

  //to delete card - currently not available
  deleteRecipe(index: number) {
    this.cards.splice(index, 1);
    this.cardsChanged.next(this.cards.slice());
  }

  //set Available Balance
  setWallet() {
    this.availableBalance = 0;
    this.noOfCards = 0;
    this.cards.forEach(element => {
      this.availableBalance = this.availableBalance + element.cardAmount;
      this.noOfCards = this.cards.length;
    });
  }

  //get Available Balance
  getAvailableBalance() {
    this.setWallet();
    return this.availableBalance;
  }

  getNoOfCards() {
    return this.noOfCards;
  }

  constructor() { }

}
