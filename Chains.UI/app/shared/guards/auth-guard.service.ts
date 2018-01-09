import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
//import { AuthenticationService } from '../services/authentication.service'

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {
    canActivate() {
        console.log('i am checking to see if you are logged in');
        return true;
    }

    canActivateChild() {
        console.log('i am checking to see if you are logged in for the children');
        return true;
    }
}