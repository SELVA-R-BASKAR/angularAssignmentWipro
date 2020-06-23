import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-create-new-card',
  templateUrl: './create-new-card.component.html',
  styleUrls: ['./create-new-card.component.css']
})
export class CreateNewCardComponent implements OnInit {
  // form = new FormGroup({
  //   cardName: new FormControl('', Validators.required),
  //   selectAccount: new FormControl('', Validators.required),
  //   amount: new FormControl('', Validators.required),
  //  });

   createCardForm: FormGroup;
  @Output() cardCreated = new EventEmitter<{cardCreated: boolean}>(); 
  // @Input('cardCreated') cardCreated: {created: boolean}; 
  constructor(
    private cardService: DataService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    // alert("Card created Successfully");
    console.log(this.createCardForm);
    this.cardService.addCard(this.createCardForm.value);
    this.cardCreated.emit({
      cardCreated: true});
  }

  initForm() {
    let cardName = '';
    let cardNumber = '';
    let expiry = '';
    let selectAccount = '';
    let amount: number;
    // let recipeIngredients = new FormArray([]);

    this.createCardForm = new FormGroup({
      cardName: new FormControl(cardName, Validators.required),
      selectAccount: new FormControl(selectAccount, Validators.required),
      cardNumber: new FormControl(cardNumber, Validators.required),
      expiry: new FormControl(expiry, Validators.required),
      cardAmount: new FormControl(amount, Validators.required),
      // ingredients: recipeIngredients
    });
  }
 

}
