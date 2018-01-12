import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private auth: AuthenticationService){}

    canActivate() {
        return this.auth.isAuthenticated()
    }

    canActivateChild() {
        return this.auth.isAuthenticated()
    }
}