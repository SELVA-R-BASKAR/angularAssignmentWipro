import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService, 
                private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): 
        boolean 
        | import("@angular/router").UrlTree 
        | import("rxjs").Observable<boolean 
        | import("@angular/router").UrlTree> 
        | Promise<boolean | import("@angular/router").UrlTree> {
           let isLoggedIn = this.authService.isLoggedIn;
            if(isLoggedIn) {
                console.log('AuthGuard Check Successful: LogIn Successful');
                return true;
            }
            console.log("AuthGuard Check Failure: LogIn to Continue");
            return this.router.createUrlTree(['/auth']);
       /* return this.authService.user.pipe(
            take(1),
            map(user => {
              //const isAuth = !!user;
              const isAuth = true;
              if (isAuth) {
                console.log('AuthGuard Check Successful:');
                console.log(this.authService.user);
                return false;
              }
              console.log("AuthGuard Check Failure:");
              console.log(this.authService.user);
              return this.router.createUrlTree(['/auth']);
            }));*/
        }
}