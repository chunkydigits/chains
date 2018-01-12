import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { authenticationConfiguration } from '../configuration/authentication.configuration';
import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class AuthenticationService {

  auth0Options = {
    theme: {
      logo: '/assets/images/logo-sm.png',
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
    autoclose: true
  };

  lock = new Auth0Lock(
    authenticationConfiguration.auth0.clientId,
    authenticationConfiguration.auth0.domain,
    this.auth0Options
  );

  constructor(private router: Router) {
    this.lock.on('authenticated', (authResult: any) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          throw new Error(error);
        }
    
        localStorage.setItem('token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.router.navigate(['/']);
      });
    });

    this.lock.on('authorization_error', error => {
      console.log('something went wrong', error);
    });
  }

  login() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    return tokenNotExpired();
  }
}