import { Injectable } from '@angular/core';
import { User } from '../user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  private users: User[] = [
    new User(
      'walletuser0',
      'wallet@2020'
    ),
    new User(
      'walletuser2',
      'wallet@2020'
    ),
    new User(
      'walletuser3',
      'wallet@2020'
    )
  ]

  constructor() { }
}
