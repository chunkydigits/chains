"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const user_1 = require("../shared/models/user");
let UserProfileComponent = class UserProfileComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], UserProfileComponent.prototype, "user", void 0);
UserProfileComponent = __decorate([
    core_1.Component({
        selector: 'user-profile',
        template: `
        <div class="jumbotron" *ngIf="user">
            <img [src]="user.avatar" class="img-circle img-responsive">
            <h2>{{user.name}} <small>{{user.username}}</small></h2>
            <input class="form-control" [(ngModel)]="user.name">
            <a [routerLink]="['/about', user.username]">link</a>
        </div>
    `
    })
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=userprofile.component.js.map