import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private auth: AuthenticationService, private router: Router) { }

    canActivate() {
        if (this.auth.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/unauthorised'], {});
            return false;
        }
    }

    canActivateChild() {
        return this.auth.isAuthenticated()
    }
}