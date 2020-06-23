import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { DataService } from '../shared/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  isLoginSuccess: boolean = false;
  error: String = null;
  authObs: Observable<AuthResponseData>;
  // userDetails: User;
  authForm: FormGroup;

  constructor(
    private authService: AuthService,
    private cardService: DataService,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  
/*  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  } */

  onSubmit(){
    // alert("Card created Successfully");
    console.log(this.authForm);
    const userName = this.authForm.value.userName;
    const password = this.authForm.value.password;
    this.isLoading = true;
    this.isLoginSuccess = this.authService.login(userName, userName);
    console.log('userDetail ' + userName);
    if(this.isLoginSuccess) {
          this.cardService.loadCards(userName);
          this.router.navigate(['dashboard']);
          this.isLoading = false;
        }
        else {
              this.error = "User name or password is invalid";
              console.log('User name or password is invalid');
              this.isLoading = false;
            }
  }
  // onSubmit() {
  //   const userName = this.authForm.value.userName;
  //   const password = this.authForm.value.password;
  //   this.isLoading = true;
  //   /* if(this.isLoginMode) {
  //     this.authObs = this.authService.login(email, password);
  //   }
  //   else {
  //     this.authObs = this.authService.signUp(email, password);
  //   } */
  //   this.userDetails.userName = this.authService.login(userName, password);
  //   console.log('authTs: ' + this.userDetails);
    
  //   /* this.authObs.subscribe(
  //     resData => {
  //       console.log(resData);
  //       this.isLoading = false;
  //     },
  //     error => {
  //       console.log(error);
  //       this.error = "An Unexpected error occured: To be more specific add catch error and throw Error in http using pipe and switch";
  //       this.isLoading = false;
  //     }
  //   );*/
  //   if(this.userDetails.userName !== null) {
  //     this.cardService.loadCards(this.userDetails.userName);
  //     this.router.navigate(['dashboard'], {relativeTo:this.route});
  //     this.isLoading = false;
  //   }
  //   else {
  //     this.error = "An Unexpected error Occured";
  //     console.log('Error in Auth ts');
  //     this.isLoading = false;
  //   }
  // }

  initForm() {
    let userName = '';
    let password = '';

    this.authForm = new FormGroup({
      userName: new FormControl(userName, Validators.required),
      password: new FormControl(password, Validators.required)
    });
  }
}
