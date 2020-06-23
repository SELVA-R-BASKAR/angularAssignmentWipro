export class Card {
    public cardName: string;
    public cardNumber: string;
    public expiry: string;
    public cardAmount: number;

    constructor(companyName: string, cardNumber: string, expiry: string, cardAmount: number) {
        this.cardName = companyName;
        this.cardNumber = cardNumber;
        this.expiry = expiry;
        this.cardAmount = cardAmount;
    }
  }