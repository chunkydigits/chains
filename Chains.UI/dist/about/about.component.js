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
const router_1 = require("@angular/router");
let AboutComponent = class AboutComponent {
    constructor(route) {
        this.route = route;
        this.message = "Hello!";
    }
    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }
    onUserCreated(event) {
        this.users.push(event.user);
    }
    ngOnInit() {
        //this.service.getUsers().then(users => this.users = users); // use this method when the ngInit is getting bare big
        // use this to get the users before you actually have loaded the page. 
        // i.e.as soon as you start getting the resources of the page, this is 
        // kicked off and working in the background to load it faster. 
        this.route.data.forEach((data) => this.users = data.users);
    }
};
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about-page',
        template: `
        <div class="row">
        <div class="col-sm-4">
            <div *ngIf="users">
                <div class="col-sm-12 users-list">
                    <div class="profile-card"
                        *ngFor="let user of users"
                        (click)=selectUser(user)
                        [class.active]="user === activeUser">
                            {{user.name}}({{user.username}})
                    </div>
                </div>
            </div>
            <user-form (userCreated)="onUserCreated($event)"></user-form>
        </div>
        <div class="col-sm-8">
            <user-profile [user]="activeUser"></user-profile>
            <div class="jumbotron"
                 *ngIf="!activeUser">
                <span class="glyphicon glyphicon-arrow-left"></span>
                <h2>Choose a user</h2>
            </div>
        </div>
    </div>
    `,
        styles: [`
    .profile-card {
        background: whitesmoke;
        padding: 30px;
        border-radius: 5px;
        text-align:center;
    }

    .profile-card img {
        max-width:50%;
        margin: 10px auto;
    }`]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map