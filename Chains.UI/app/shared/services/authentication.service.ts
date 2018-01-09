import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { authenticationConfiguration } from '../configuration/authentication.configuration';
import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class AuthenticationService {

  auth0Options = {
    theme: {
      logo: '/content/images/logo-sm.png',
      primaryColor: '#DFA612'
    },
    auth: {
      redirectUrl: authenticationConfiguration.auth0.callbackURL,
      responseType: 'token id_token',
      audience: `https://${authenticationConfiguration.auth0.domain}/userinfo`,
      params: {
        scope: 'openid profile'
      }
    },
    autoclose: true,
    oidcConformant: true,
  };

  lock = new Auth0Lock(
    authenticationConfiguration.auth0.clientId,
    authenticationConfiguration.auth0.domain,
    this.auth0Options
  );

  constructor(private router: Router) {
    this.lock.on('authenticated', (authResult: any) => {
      console.log('Nice, it worked!');
      this.router.navigate(['/']); // go to the home route
      // ...finish implementing authenticated
    });

    this.lock.on('authorization_error', error => {
      console.log('something went wrong', error);
    });
  }

  login() {
    this.lock.show();
  }

  logout() {
    // ...implement logout
  }

  isAuthenticated() {
    // ...implement logout
  }
}