import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Injectable()

export class AboutUserResolve implements Resolve<User> {

    constructor(private service: UserService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot) {
        let username = route.params['username'];
        
        return this.service.getUser(username).then(users => {
            if (User) {
                return User;
            } else {
                this.router.navigate(['/about']);
                return false;
            }
        });
    }
}