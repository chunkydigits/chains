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
let UserFormComponent = class UserFormComponent {
    constructor() {
        this.userCreated = new core_1.EventEmitter();
        this.newUser = new user_1.User();
        this.active = true;
    }
    onSubmit() {
        // show the event that the user was created
        this.userCreated.emit({ user: this.newUser });
        console.log(this.newUser);
        this.newUser = new user_1.User();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserFormComponent.prototype, "userCreated", void 0);
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        styles: [`
        form {
            padding: 10px;
            background-color: #ecfbf1;
            border-radius:3px; 
            margin-bottom: 30px;
        }
    `],
        template: `
        <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active === true">
            <div class="form-group" [ngClass]="{ 'has-error':name.invalid && name.touched }">
                <input type="text" class="form-control" name="name" required placeholder="Name"
                [(ngModel)]="newUser.name" #name="ngModel">
                <span class="help-block" *ngIf="name.invalid && name.touched">Name is required</span>
            </div>
            <div class="form-group" [ngClass]="{ 'has-error':username.invalid && username.touched }">
                <input type="text" class="form-control" name="username" required placeholder="Username"
                [(ngModel)]="newUser.username" #username="ngModel">
                <span class="help-block" *ngIf="username.invalid && username.touched">Username is required</span>
            </div>
            <button type="submit" class="btn btn-lg btn-block btn-primary"
            [disabled]="form.invalid">Create User</button>
        </form>
    `
    })
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=userform.component.js.map