import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewCardsComponent } from './view-cards/view-cards.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopupCardComponent } from './topup-card/topup-card.component';
import { LoginComponent } from './login/login.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateNewCardComponent } from './view-cards/create-new-card/create-new-card.component';
import { AuthComponent } from './auth/auth.component'
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { SuccessComponent } from './success/success.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  // { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'viewCards', component: ViewCardsComponent , canActivate: [AuthGuard], 
    children:[{path:'createNewCard', component: CreateNewCardComponent,}]},
  { path: 'success', component: SuccessComponent},
  { path: 'topupCard', component: TopupCardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewCardsComponent,
    TopupCardComponent,
    LoginComponent,
    CreateNewCardComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BrowserModule, 
    FormsModule, 
    MatCheckboxModule, 
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }