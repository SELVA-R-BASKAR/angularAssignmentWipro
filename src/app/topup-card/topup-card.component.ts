import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Card } from '../cards.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topup-card',
  templateUrl: './topup-card.component.html',
  styleUrls: ['./topup-card.component.css']
})
export class TopupCardComponent implements OnInit {

  topUpCardForm: FormGroup;
  cards: Card[] = [];
  selectedCard: Card;
  cardIndex: number;
  cardSearch: Card;
  error: string = null;
  success: string = null;
  constructor(
    private cardService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    // alert("Card TopUp Successful");
    let cardName = '';
    cardName = this.topUpCardForm.value.cardName;
    console.log(this.topUpCardForm);
    this.cards = this.cardService.getCards();
    console.log('Cards []' + this.cards);
    this.selectedCard = this.cards.find(card => card.cardName === cardName);
    console.log('selectedCard' + this.selectedCard);
    console.log(this.selectedCard);
    this.cardIndex = this.cards.indexOf(this.selectedCard);
    console.log('CardIndex Of TopUp Card ' + this.cardIndex);
    if(this.cardIndex !== -1) {
      //updating Amount and updating in array
      this.selectedCard.cardAmount = this.selectedCard.cardAmount + this.topUpCardForm.value.cardAmount;
      this.cardService.updateCard(this.cardIndex, this.selectedCard);
      console.log("Card TopUp successful");
      this.success = "Card TopUp successful"
    }
    else {
      console.log("Card Not Found");
      this.error = "Card Not Found"
    }
    
  }

  onViewCards() {
    this.router.navigate(['viewCards']);
  }

  initForm() {
    let cardName = '';
    // let cardNumber = '';
    // let expiry = '';
    let selectAccount = '';
    let amount: number;
    // let recipeIngredients = new FormArray([]);

    this.topUpCardForm = new FormGroup({
      cardName: new FormControl(cardName, Validators.required),
      selectAccount: new FormControl(selectAccount, Validators.required),
      // cardNumber: new FormControl(cardNumber, Validators.required),
      // expiry: new FormControl(expiry, Validators.required),
      cardAmount: new FormControl(amount, Validators.required),
      // ingredients: recipeIngredients
    });
  }
}
