import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DataService } from './shared/data.service';
import { User } from './user.model';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  // state = 'normal';
  title = 'my-assignment-app';
  show: boolean = true;
  // lists:string[] = [];
  // alphabetAnimate: boolean = true;
  userDetails: User;
  isLoggedIn: boolean = false;
  isLoggedInObs: Observable<boolean>;
  

  constructor(
    public cardService: DataService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    // this.isLoggedIn = this.authService.isLoggedIn;
    //this.isLoggedInObs = this.authService.isLoggedIn;
    // console.log(this.isLoggedInObs);
    console.log('ngDoCheck triggered');
    this.isLoggedIn = this.authService.isLoggedIn;
    console.log(this.isLoggedIn);
  }

  onLogOut() {
    this.authService.logOut();
  }

  onLoggedIn(event) {
    console.log('onLoggedIn');
    console.log(event);
  }

  ngOnChanges(){
    // executed multiple times
    //called after a bound input property changes
    console.log("ngOnChanges");
    }

    ngDoCheck() {
    //Called during every change detection run
    //if anything changes in DOM
    //triggered on any events
    //change detection
    console.log('ngDoCheck triggered');
    this.isLoggedIn = this.authService.isLoggedIn;
    console.log(this.isLoggedIn);

    }

    ngAfterContentInit() {
    // Called after content(ng-content) has been projected into view
    console.log("ngAfterContentInit");
    }

    ngAfterContentChecked() {
    // Called everytime the projected content has been checked
    console.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
    //Called after the component's view (and child views) has been initialized
    console.log("ngAfterViewInit");
    }

    ngAfterViewChecked() {
    //Called after the component's view (and child views) has been Checked
    console.log("ngAfterViewChecked");
    }

    ngOnDestroy() {
    //Called once the component is about to be destoyed
    console.log("ngOnDestroy");
    }
   
}
