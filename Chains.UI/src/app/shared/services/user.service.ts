import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([{ id: 25, name: 'bob', username: 'bobbybits', avatar: 'http://chunkydigits.com/chunkydigits/Images/Site/chunkydigits%20-%20logo.png' },
{ id: 26, name: 'andy', username: 'chunkydigits', avatar: 'http://chunkydigits.com/chunkydigits/Images/Site/chunkydigits%20-%20logo.png' },
{ id: 27, name: 'louise', username: 'loulou', avatar: 'http://chunkydigits.com/chunkydigits/Images/Site/chunkydigits%20-%20logo.png' }]);


@Injectable()

export class UserService {

    getUsers() {
        return usersPromise;
    }

    getUser(username) {
        return usersPromise.then(users => users.find(user => user.username === username));
    }

}

