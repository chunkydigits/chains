"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const usersPromise = Promise.resolve([{ id: 25, name: 'bob', username: 'bobbybits', avatar: 'http://chunkydigits.com/chunkydigits/Images/Site/chunkydigits%20-%20logo.png' },
    { id: 26, name: 'andy', username: 'chunkydigits', avatar: 'http://chunkydigits.com/chunkydigits/Images/Site/chunkydigits%20-%20logo.png' },
    { id: 27, name: 'louise', username: 'loulou', avatar: 'http://chunkydigits.com/chunkydigits/Images/Site/chunkydigits%20-%20logo.png' }]);
let UserService = class UserService {
    getUsers() {
        return usersPromise;
    }
    getUser(username) {
        return usersPromise.then(users => users.find(user => user.username === username));
    }
};
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map