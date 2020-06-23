import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Subject, pipe, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../user.model';
import { Router } from '@angular/router';


export interface AuthResponseData {
  //Response Payload good practise to define the data that we are using
idToken: string;
email: string;
refreshToken: string;	
expiresIn: string;
localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user = new Subject<User>(null);
  user = new BehaviorSubject<User>(null);
  isLoggedIn: boolean = false;
  // isLoggedIn = new Subject<boolean>();
  // @Output() isLoggedIn = new EventEmitter<{isLoggedIn: boolean}>(); 

  constructor(
   private http: HttpClient,
   private router: Router
  ) { }

 /* signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAA6igeFtJKMFmmDPPgcfCFmbkYkp213I8',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
  .pipe(
    tap(resData => 
    {
      this.handleAuthentication(
        resData.email, 
        resData.localId, 
        resData.idToken, 
        +resData.expiresIn )
    })
  );
  } */

  login(userName: string, password: string) {
    /* return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAA6igeFtJKMFmmDPPgcfCFmbkYkp213I8',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ); */
    if(userName === 'walletuser1' || userName === 'walletuser2' || userName === 'walletUser3' && password === 'wallet@2020') {
      const user = new User(userName, password);
      this.user.next(user);
      //this.isLoggedIn.next(true);
      this.isLoggedIn = true;
      // this.isLoggedIn.emit({isLoggedIn: true});
      localStorage.setItem('userData', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
      console.log('login success for' + userName);
      return true;
    }
    else {
      this.user.next(null);
      this.isLoggedIn = false;
      //this.isLoggedIn.next(false);
      // this.isLoggedIn.emit({isLoggedIn: false});
      return false;
    }
  }

  handleError(errorRes: HttpErrorResponse) {
 // Switch error Code goes here
  }

  /* handleAuthentication(email: string, userId: string, token: string, expiresIn: number ) {
    // Switch error Code goes here
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email, 
      userId
    );
    this.user.next(user);
     } */

     logOut() {
        this.user.next(null);
        this.isLoggedIn = false;
        // this.isLoggedIn.next(false);
        // this.isLoggedIn.emit({isLoggedIn: false});
        console.log(' isLoggedIn ' + this.isLoggedIn);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        localStorage.removeItem('isLoggedIn');
      }
}
